(function () {
  'use strict';
  var D = window.SS, N = D.nodes;
  var main = document.getElementById('main'), nav = document.getElementById('nav'), foot = document.getElementById('foot');
  var KEY = 'ss-state-v1';
  var state = load();
  function load() { try { return JSON.parse(sessionStorage.getItem(KEY)) || fresh(); } catch (e) { return fresh(); } }
  function fresh() { return { v: {}, path: [] }; }
  function save() { try { sessionStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }

  function el(tag, attrs, kids) {
    var e = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (k === 'text') e.textContent = attrs[k];
      else if (k === 'class') e.className = attrs[k];
      else e.setAttribute(k, attrs[k]);
    }
    (kids || []).forEach(function (c) { if (c) e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return e;
  }
  function p(t, cls) { return el('p', cls ? { 'class': cls, text: t } : { text: t }); }
  function matches(c) {
    if (!c) return true;
    for (var k in c) if (state.v[k] !== c[k]) return false;
    return true;
  }
  function paras(list) {
    var out = [];
    list.forEach(function (x) {
      if (typeof x === 'string') out.push(p(x));
      else if (matches(x.if)) out.push(p(x.t));
    });
    return out;
  }
  function srcLinks(keys) {
    var wrap = el('span', { 'class': 'srcs' }, [el('span', { text: 'Source: ' })]);
    keys.forEach(function (k, i) {
      var s = D.sources[k];
      if (i) wrap.appendChild(document.createTextNode('; '));
      wrap.appendChild(el('a', { href: s.u, target: '_blank', rel: 'noopener', text: s.short }));
    });
    return wrap;
  }
  function realBox(list, title) {
    var d = el('details', { 'class': 'panel real' });
    d.appendChild(el('summary', { text: title || 'Real history for this scene' }));
    var ul = el('ul');
    list.forEach(function (r) {
      ul.appendChild(el('li', null, [el('span', { 'class': 'badge b-real', text: 'Real' }), document.createTextNode(r.t + ' '), srcLinks(r.src)]));
    });
    d.appendChild(ul);
    return d;
  }
  
  function toggle(label, content) {
    var id = 't' + Math.random().toString(36).slice(2, 8);
    var b = el('button', { type: 'button', 'class': 'btn small tog', 'aria-expanded': 'false', 'aria-controls': id, text: 'Show ' + label });
    var box = el('div', { id: id, 'class': 'tbox', hidden: '' });
    box.appendChild(content);
    b.addEventListener('click', function () {
      var open = box.hasAttribute('hidden');
      if (open) box.removeAttribute('hidden'); else box.setAttribute('hidden', '');
      b.setAttribute('aria-expanded', open ? 'true' : 'false');
      b.textContent = (open ? 'Hide ' : 'Show ') + label;
    });
    return el('div', { 'class': 'tgroup' }, [b, box]);
  }
  function teacherBlock(t) {
    if (!t) return null;
    var inner = el('div');
    inner.appendChild(el('p', null, [el('b', { text: 'About this scene. ' }), document.createTextNode(t.about)]));
    if (t.ask && t.ask.length) {
      inner.appendChild(el('h3', { text: 'Questions to ask' }));
      var ul = el('ul');
      t.ask.forEach(function (q) { ul.appendChild(el('li', { text: q })); });
      inner.appendChild(ul);
      inner.appendChild(el('h3', { text: 'Suggested answers' }));
      var ol = el('ul');
      t.answers.forEach(function (a) { ol.appendChild(el('li', { text: a })); });
      inner.appendChild(ol);
    }
    var wrap = el('div', { 'class': 'panel teacher' });
    wrap.appendChild(el('h3', { text: 'Teacher notes' }));
    wrap.appendChild(toggle('notes and answers for this scene', inner));
    return wrap;
  }
  

  function setPage(title, nodes) {
    main.innerHTML = '';
    var h = el('h1', { tabindex: '-1', text: title });
    main.appendChild(h);
    nodes.forEach(function (n) { if (n) main.appendChild(n); });
    document.title = title + ' · ' + D.title;
    window.scrollTo(0, 0);
    h.focus();
  }

  function renderNav(route) {
    nav.innerHTML = '';
    var items = [['#/', 'Start'], ['#/behind', 'Behind the Story'], ['#/discuss', 'Discuss and write'], ['#/sources', 'Sources']];
     items.push(['#/teacher', 'Teacher notes']); 
    items.forEach(function (it) {
      var a = el('a', { href: it[0], text: it[1] });
      var cur = (it[0] === '#/' && (route === '' || route.indexOf('n/') === 0)) || it[0] === '#/' + route;
      if (cur) a.setAttribute('aria-current', 'page');
      nav.appendChild(a);
    });
  }

  function start() {
    state = fresh(); save();
    location.hash = '#/n/how';
  }

  function viewOpening() {
    var w = el('div', { 'class': 'care', role: 'note' });
    w.appendChild(el('h2', { text: 'Cultural content warning' }));
    D.opening.warning.forEach(function (t, i) { w.appendChild(el('p', i === 0 ? { 'class': 'strong', text: t } : { text: t })); });
    var r = el('div', { 'class': 'panel check' }, [p(D.opening.review)]);
    var btn = el('button', { type: 'button', 'class': 'btn dark big', text: 'I have read the warning. Begin the story.' });
    btn.addEventListener('click', start);
    var kids = [el('p', { 'class': 'lead', text: D.subtitle }), w, r];
    D.opening.intro.forEach(function (t) { kids.push(p(t)); });
    kids.push(el('div', { 'class': 'actions' }, [btn, el('a', { 'class': 'btn', href: '#/behind', text: 'Read Behind the Story first' })]));
     kids.push(el('p', { 'class': 'note', text: 'Teacher version. Notes and answers are behind “Show” buttons on each scene and on the Discuss and write page.' })); 
    setPage(D.title, kids);
  }

  function viewNode(id) {
    var n = N[id];
    if (!n) { location.hash = '#/'; return; }
    if (id === 'how' && (!state.path.length || state.path[state.path.length - 1].id !== 'how')) { state = fresh(); }
    if (n.set) for (var k in n.set) state.v[k] = n.set[k];
    var at = -1;
    state.path.forEach(function (s, i) { if (s.id === id) at = i; });
    if (at >= 0) { state.path = state.path.slice(0, at + 1); delete state.path[at].choice; }
    else state.path.push({ id: id, title: n.title });
    save();
    var kids = [];
    if (n.end) kids.push(el('p', { 'class': 'kind', text: 'Ending: ' + n.kind }));
    paras(n.text).forEach(function (x) { kids.push(x); });
    if (n.end) {
      kids.push(el('div', { 'class': 'panel summary' }, [el('h2', { text: 'What this ending shows' }), p(n.summary)]));
    }
    if (n.real) kids.push(realBox(n.real));
    if (id === 'how') {
      // nothing extra
    }
    if (n.choices) {
      var ul = el('ul', { 'class': 'choices', 'aria-label': 'Your choices' });
      n.choices.filter(function (c) { return matches(c.if); }).forEach(function (c) {
        var b = el('button', { type: 'button', 'class': 'sc', text: c.label });
        b.addEventListener('click', function () {
          var cur = state.path[state.path.length - 1];
          if (cur) cur.choice = c.label;
          if (c.set) for (var k in c.set) state.v[k] = c.set[k];
          save();
          location.hash = '#/n/' + c.to;
        });
        ul.appendChild(el('li', null, [b]));
      });
      kids.push(el('h2', { 'class': 'sr', text: 'What do you do?' }));
      kids.push(ul);
    }
     var tb = teacherBlock(n.teacher); if (tb) kids.push(tb); 
    if (n.end) {
      var pl = el('ol', { 'class': 'trail' });
      state.path.forEach(function (s) {
        var li = el('li', null, [el('b', { text: s.title }), s.choice ? document.createTextNode(': ' + s.choice) : null]);
        pl.appendChild(li);
      });
      kids.push(el('div', { 'class': 'panel' }, [el('h2', { text: 'Your path' }), pl]));
      var again = el('button', { type: 'button', 'class': 'btn dark', text: 'Try another path' });
      again.addEventListener('click', start);
      kids.push(el('div', { 'class': 'actions' }, [again, el('a', { 'class': 'btn', href: '#/behind', text: 'Behind the Story' }), el('a', { 'class': 'btn', href: '#/discuss', text: 'Discuss and write' })]));
    } else {
      kids.push(el('p', { 'class': 'small', text: 'Scene ' + state.path.length + '. You can stop at any time.' }));
      var rs = el('button', { type: 'button', 'class': 'btn small', text: 'Start again' });
      rs.addEventListener('click', start);
      kids.push(rs);
    }
    setPage(n.title, kids);
  }

  function ul(list) { var u = el('ul'); list.forEach(function (t) { u.appendChild(el('li', { text: t })); }); return u; }

  function viewBehind() {
    var B = D.behind, kids = [];
    kids.push(p(B.intro));
    kids.push(el('div', { 'class': 'panel made' }, [el('h2', { text: 'What is invented' }), ul(B.invented)]));
    kids.push(el('div', { 'class': 'panel' }, [el('h2', { text: 'What the story leaves out on purpose' }), ul(B.left)]));
    kids.push(el('div', { 'class': 'panel' }, [el('h2', { text: 'Fairness to the people in the story' }), ul(B.caution)]));
    kids.push(el('div', { 'class': 'panel real' }, [el('h2', { text: 'Real history' }), p('Every real fact in the story is given in a “Real history” panel with its source. See the Sources page for the full list.')]));
    kids.push(el('div', { 'class': 'care' }, [el('h2', { text: 'Content warning and community review' }), p(D.opening.warning[0]), p(D.opening.review)]));
    B.images.forEach(function (im) {
      var img = el('details', { 'class': 'panel' });
      img.appendChild(el('summary', { text: im.summary }));
      img.appendChild(p(B.imageNote));
      var fig = el('figure');
      fig.appendChild(el('img', { src: im.file, alt: im.alt, loading: 'lazy' }));
      fig.appendChild(el('figcaption', null, [document.createTextNode(im.cap + ' '), srcLinks([im.src])]));
      img.appendChild(fig);
      kids.push(img);
    });
    setPage('Behind the Story', kids);
  }

  function qlist(list, label) {
    var ol = el('ol', { 'class': 'qs' });
    list.forEach(function (it) {
      var li = el('li', null, [el('p', { text: it.q })]);
       if (it.a) li.appendChild(toggle('suggested answer', p(it.a))); 
      ol.appendChild(li);
    });
    return ol;
  }
  function viewDiscuss() {
    var kids = [p('Play at least three different paths before you answer these.'),
      el('h2', { text: 'Discuss' }), qlist(D.discuss),
      el('h2', { text: 'Write' }), qlist(D.write),
      p('Write your answers in full sentences. Use the real history panels as evidence, and say which parts of the story are invented.')];
    setPage('Discuss and write', kids);
  }

  function viewSources() {
    var ul2 = el('ul', { 'class': 'sourcelist' });
    Object.keys(D.sources).forEach(function (k) {
      var s = D.sources[k];
      ul2.appendChild(el('li', null, [document.createTextNode(s.t + ' '), el('a', { href: s.u, target: '_blank', rel: 'noopener', text: s.u })]));
    });
    setPage('Sources', [p('These are the sources for the real history in the story. Trove is the National Library of Australia’s newspaper archive. Where a source is a book or journal article, the link goes to a copy that can be read online.'), ul2,
      el('div', { 'class': 'note' }, [p('Where to read more: Queensland State Archives holds records about Australian South Sea Islanders (recruitment, agreements, health, deportation and those who stayed). The National Archives of Australia holds the 1902 and 1906 petitions. Some records use words that are offensive today. Talk to a teacher first.')])]);
  }

  
  function viewTeacher() {
    setPage('Teacher notes', [ul(D.teacherNotes), p('Each scene has a “Teacher notes” block. Open it with the “Show” button.')]);
  }
  

  function route() {
    var r = (location.hash || '#/').replace(/^#\/?/, '');
    renderNav(r);
    if (r === '' ) viewOpening();
    else if (r.indexOf('n/') === 0) viewNode(r.slice(2));
    else if (r === 'behind') viewBehind();
    else if (r === 'discuss') viewDiscuss();
    else if (r === 'sources') viewSources();
     else if (r === 'teacher') viewTeacher(); 
    else viewOpening();
  }
  foot.appendChild(p('This resource may contain names and images of deceased Aboriginal, Torres Strait Islander and South Sea Islander people. Harry and the other characters in the story are invented.'));
  foot.appendChild(p(D.footer));
  window.addEventListener('hashchange', route);
  route();
})();
