(function () {
  'use strict';
  var D = window.INFO;
  var main = document.getElementById('main'), nav = document.getElementById('nav'), foot = document.getElementById('foot');

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
  function ul(list, cls) { var u = el('ul', cls ? { 'class': cls } : null); list.forEach(function (t) { u.appendChild(el('li', { text: t })); }); return u; }
  function paras(list) { return (list || []).map(function (t) { return p(t); }); }

  function srcLinks(keys) {
    if (!keys || !keys.length) return null;
    var wrap = el('span', { 'class': 'srcs' }, [el('span', { text: 'Source: ' })]);
    keys.forEach(function (k, i) {
      var s = D.sources[k];
      if (!s) return;
      if (i) wrap.appendChild(document.createTextNode('; '));
      wrap.appendChild(el('a', { href: s.u, target: '_blank', rel: 'noopener', text: s.short }));
    });
    return wrap;
  }
  function srcP(keys) { var s = srcLinks(keys); return s ? el('p', { 'class': 'srcline' }, [s]) : null; }

  function figure(key) {
    var im = D.images && D.images[key];
    if (!im) return null;
    var fig = el('figure', im.tall ? { 'class': 'tall' } : null);
    fig.appendChild(el('img', { src: im.file, alt: im.alt, loading: 'lazy', width: im.w || '', height: im.h || '' }));
    fig.appendChild(el('figcaption', null, [
      document.createTextNode(im.caption + ' Credit: ' + im.credit + '. '),
      el('a', { href: im.url, target: '_blank', rel: 'noopener', text: 'Image page' })
    ]));
    if (!im.people) return fig;
    var d = el('details', { 'class': 'panel viewpic' });
    d.appendChild(el('summary', { text: 'View photograph: ' + (im.summary || 'it shows people who have died') }));
    d.appendChild(p('This photograph shows people who have died. You can choose whether to look at it. It is a public domain image and there are no AI images in this resource.'));
    d.appendChild(fig);
    return d;
  }

  function badge(text, cls) { return el('span', { 'class': 'badge ' + (cls || ''), text: text }); }

  

  function setPage(title, nodes, hideH1) {
    main.innerHTML = '';
    var h = el('h1', { tabindex: '-1', text: title });
    main.appendChild(h);
    nodes.forEach(function (n) { if (n) main.appendChild(n); });
    main.appendChild(el('p', { 'class': 'homebar' }, [el('a', { 'class': 'btn dark big home', href: 'https://robmac10.github.io/history.html', text: '← Home' })]));
    document.title = title + ' · ' + D.title;
    window.scrollTo(0, 0);
    h.focus();
  }

  var SECTIONS = [
    ['#/', 'Overview'], ['#/coast', 'Up the coast'], ['#/timeline', 'Timeline'], ['#/places', 'Places'], ['#/people', 'People and groups'],
    ['#/lives', 'Real lives'], ['#/know', 'Did you know'], ['#/folklore', 'Folklore and legends'], ['#/sources', 'Sources']
  ];
  

  function renderNav(route) {
    nav.innerHTML = '';
    SECTIONS.forEach(function (it) {
      var a = el('a', { href: it[0], text: it[1] });
      if (it[0] === '#/' + route || (it[0] === '#/' && route === '')) a.setAttribute('aria-current', 'page');
      nav.appendChild(a);
    });
  }

  function warningPanel() {
    var w = el('div', { 'class': 'care', role: 'note' });
    w.appendChild(el('h2', { text: 'Content warning' }));
    D.warning.forEach(function (t, i) { w.appendChild(el('p', i === 0 ? { 'class': 'strong', text: t } : { text: t })); });
    w.appendChild(el('p', { 'class': 'review', text: D.review }));
    return w;
  }

  function viewOverview() {
    var O = D.overview, kids = [];
    kids.push(p(D.subtitle, 'lead'));
    kids.push(warningPanel());
    var hero = figure(O.image);
    if (hero) kids.push(hero);
    kids.push(p(O.lead, 'bigpara'));
    if (O.glance && O.glance.length) {
      kids.push(el('h2', { text: 'At a glance' }));
      var g = el('div', { 'class': 'glance' });
      O.glance.forEach(function (x) {
        g.appendChild(el('div', { 'class': 'stat' }, [el('b', { text: x.n }), el('span', { text: x.label }), x.src ? srcLinks(x.src) : null]));
      });
      kids.push(g);
    }
    O.sections.forEach(function (s) {
      kids.push(el('h2', { text: s.h }));
      s.p.forEach(function (t) { kids.push(p(t)); });
      if (s.src) kids.push(srcP(s.src));
    });
    if (O.words && O.words.length) {
      kids.push(el('h2', { text: 'Words used in this resource' }));
      var dl = el('dl', { 'class': 'words' });
      O.words.forEach(function (w) { dl.appendChild(el('dt', { text: w[0] })); dl.appendChild(el('dd', { text: w[1] })); });
      kids.push(dl);
    }
    if (O.left && O.left.length) {
      kids.push(el('div', { 'class': 'panel' }, [el('h2', { text: 'What this resource leaves out on purpose' }), ul(O.left)]));
    }
    kids.push(el('h2', { text: 'Explore' }));
    var tiles = el('div', { 'class': 'tiles' });
    var blurbs = {
      '#/coast': 'Follow sugar up the coast, district by district, on a map. Each district shows its year and whose Country it is.',
      '#/timeline': 'Dated events, each with a short explanation and its source.',
      '#/places': 'The main places and what happened there.',
      '#/people': 'Real people, groups and organisations named in the sources.',
      '#/lives': 'Short accounts of real people from the records.',
      '#/know': 'Facts from the sources that are worth knowing.',
      '#/folklore': 'Yarns and legends from the period. All are labelled as unproven.',
      '#/sources': 'Every source used, and where sources disagree.'
    };
    SECTIONS.slice(1, 9).forEach(function (s) {
      tiles.appendChild(el('a', { 'class': 'tile', href: s[0] }, [el('b', { text: s[1] }), el('span', { text: blurbs[s[0]] })]));
    });
    kids.push(tiles);
    
    setPage(D.title, kids);
  }

  function svgEl(tag, attrs, kids) {
    var e = document.createElementNS('http://www.w3.org/2000/svg', tag);
    if (attrs) for (var k in attrs) {
      if (k === 'text') e.textContent = attrs[k];
      else e.setAttribute(k, attrs[k]);
    }
    (kids || []).forEach(function (c) { if (c) e.appendChild(c); });
    return e;
  }

  function districtCard(d) {
    var det = el('details', { 'class': 'dcard', id: 'd-' + d.id });
    det.appendChild(el('summary', null, [
      el('span', { 'class': 'dyear', text: String(d.year) }),
      el('span', { 'class': 'dname', text: d.name }),
      el('span', { 'class': 'dcountry', text: d.country })
    ]));
    det.appendChild(p(d.note, 'dnote'));
    if (d.image) { var f = figure(d.image); if (f) det.appendChild(f); }
    var sections = [['First plantations and mills', 'first'], ['Central mills', 'central'], ['South Sea Islander communities', 'ssi'], ['Traditional Owners and the impact', 'country_text']];
    sections.forEach(function (sx) {
      var blocks = d[sx[1]];
      if (!blocks || !blocks.length) return;
      det.appendChild(el('h3', { text: sx[0] }));
      blocks.forEach(function (b) {
        b.p.forEach(function (t) { det.appendChild(p(t)); });
        var s = srcP(b.src); if (s) det.appendChild(s);
      });
      if (sx[1] === 'first' && d.srcAll) { var s2 = srcP(d.srcAll); if (s2) det.appendChild(s2); }
    });
    if (d.people) { det.appendChild(el('h3', { text: 'People named in the sources read' })); det.appendChild(p(d.people)); }
    if (d.flags && d.flags.length) {
      det.appendChild(el('h3', { text: 'Where sources differ' }));
      d.flags.forEach(function (t) { det.appendChild(el('p', { 'class': 'flag' }, [badge('Sources differ', 'b-flag'), document.createTextNode(t)])); });
    }
    return det;
  }

  function viewCoast() {
    var C = D.coast, M = C.map, kids = [];
    var districts = C.districts.slice().sort(function (a, b) { return a.year - b.year; });
    var bins = C.bins, step = 0, mode = (window.innerWidth < 620) ? 'list' : 'map', selected = null;
    kids.push(p(C.lead, 'lead'));

    var panel = el('div', { 'class': 'coastpanel' });
    var live = el('p', { 'class': 'coastlive', 'aria-live': 'polite' });
    var slider = el('input', { type: 'range', min: '0', max: String(bins.length), value: '0', step: '1', id: 'coast-slider', 'aria-label': 'Decade, from before sugar to the 1900s to 1920s' });
    var decLabel = el('output', { 'class': 'declabel', 'for': 'coast-slider' });
    var bPrev = el('button', { type: 'button', 'class': 'btn small', text: '← Previous decade' });
    var bNext = el('button', { type: 'button', 'class': 'btn small dark', text: 'Next decade →' });
    var bAll = el('button', { type: 'button', 'class': 'btn small', text: 'Show all' });
    var bMap = el('button', { type: 'button', 'class': 'btn small', 'aria-pressed': 'false', text: 'Map' });
    var bList = el('button', { type: 'button', 'class': 'btn small', 'aria-pressed': 'false', text: 'List' });
    panel.appendChild(el('div', { 'class': 'coastrow' }, [bPrev, bNext, bAll, el('span', { 'class': 'coastsp' }), el('span', { 'class': 'viewlabel', text: 'View:' }), bMap, bList]));
    panel.appendChild(el('div', { 'class': 'coastrow' }, [el('label', { 'for': 'coast-slider', 'class': 'slabel', text: 'Decade' }), slider, decLabel]));
    panel.appendChild(live);
    kids.push(panel);

    // map
    var chipW = 150, extra = chipW + 46, Wv = M.W + extra, Hv = M.H;
    var mapWrap = el('div', { 'class': 'coastmap' });
    var svg = svgEl('svg', { viewBox: '0 0 ' + Wv + ' ' + Hv, role: 'group', 'aria-label': 'Simple outline map of the Queensland coast. The districts are also listed below the map.', 'class': 'coastsvg' });
    svg.appendChild(svgEl('rect', { x: 0, y: 0, width: Wv, height: Hv, fill: '#dbe7e3' }));
    svg.appendChild(svgEl('path', { d: M.path, fill: '#efe6cf', stroke: '#8a7d5a', 'stroke-width': 1.2, 'stroke-linejoin': 'round' }));
    svg.appendChild(svgEl('text', { x: 40, y: Hv - 30, 'class': 'maplab', text: 'Queensland' }));
    svg.appendChild(svgEl('text', { x: Wv - 20, y: 28, 'class': 'maplab sea', 'text-anchor': 'end', text: 'Coral Sea' }));
    // positions
    var pos = districts.map(function (d) {
      var x = (d.lon - M.lon0) * M.cs * M.S, y = (M.lat0 - d.lat) * M.S;
      return { d: d, x: x, y: y, cx: x + 40, cy: y };
    });
    var byY = pos.slice().sort(function (a, b) { return a.y - b.y; }), prev = -99;
    byY.forEach(function (q) { q.cy = Math.max(q.y, prev + 27); prev = q.cy; });
    byY[byY.length - 1].cy = Math.min(byY[byY.length - 1].cy, Hv - 16);
    for (var bi = byY.length - 2; bi >= 0; bi--) byY[bi].cy = Math.min(byY[bi].cy, byY[bi + 1].cy - 27);
    var groups = {};
    pos.forEach(function (q) {
      var d = q.d;
      var g = svgEl('g', { 'class': 'dist', tabindex: '0', role: 'button', 'aria-label': d.year + ', ' + d.name + '. ' + d.country });
      g.appendChild(svgEl('line', { x1: q.x, y1: q.y, x2: q.cx, y2: q.cy, 'class': 'lead' }));
      g.appendChild(svgEl('circle', { cx: q.x, cy: q.y, r: 8, 'class': 'dot' }));
      g.appendChild(svgEl('rect', { x: q.cx, y: q.cy - 12, width: chipW, height: 24, rx: 4, 'class': 'chip' }));
      g.appendChild(svgEl('text', { x: q.cx + 7, y: q.cy + 5, 'class': 'chipyear', text: String(d.year) }));
      g.appendChild(svgEl('text', { x: q.cx + 46, y: q.cy + 5, 'class': 'chipname', text: d.short }));
      g.addEventListener('click', function () { select(d.id); });
      g.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(d.id); } });
      svg.appendChild(g);
      groups[d.id] = g;
    });
    mapWrap.appendChild(svg);
    var detail = el('div', { 'class': 'coastdetail', 'aria-live': 'polite' });
    mapWrap.appendChild(detail);
    kids.push(mapWrap);
    kids.push(p(C.mapLine, 'mapline strong'));

    var listWrap = el('div', { 'class': 'coastlist' });
    var cards = {};
    districts.forEach(function (d) { var c = districtCard(d); cards[d.id] = c; listWrap.appendChild(c); });
    var listHead = el('h2', { text: 'The districts' });
    kids.push(listHead);
    kids.push(listWrap);

    var how = el('div', { 'class': 'panel check' }, [el('h2', { text: 'How to read this page' }), ul(C.how)]);
    kids.push(how);
    

    function limit() { return step === 0 ? 0 : bins[step - 1].to; }
    function lower() { return step <= 1 ? 0 : bins[step - 2].to; }
    function select(id) {
      selected = id;
      detail.innerHTML = '';
      var d = C.districts.filter(function (x) { return x.id === id; })[0];
      if (d) {
        detail.appendChild(el('h3', { text: d.year + ' · ' + d.name }));
        detail.appendChild(p(d.note));
        detail.appendChild(el('p', null, [el('strong', { text: 'Whose Country: ' }), document.createTextNode(d.country + '.')]));
        var open = el('button', { type: 'button', 'class': 'btn small dark', text: 'Open the full district card' });
        open.addEventListener('click', function () { setMode('list'); cards[id].open = true; cards[id].scrollIntoView(); cards[id].querySelector('summary').focus(); });
        detail.appendChild(open);
      }
      Object.keys(groups).forEach(function (k) { groups[k].classList.toggle('sel', k === id); });
    }
    function render() {
      var lim = limit(), low = lower(), names = [];
      districts.forEach(function (d) {
        var on = d.year <= lim, isNew = on && d.year > low;
        groups[d.id].classList.toggle('on', on);
        groups[d.id].classList.toggle('new', isNew);
        groups[d.id].setAttribute('aria-hidden', on ? 'false' : 'true');
        groups[d.id].setAttribute('tabindex', on ? '0' : '-1');
        cards[d.id].hidden = !on;
        if (isNew) names.push(d.short + ' (' + d.year + ')');
      });
      var shown = districts.filter(function (d) { return d.year <= lim; }).length;
      slider.value = String(step);
      decLabel.textContent = step === 0 ? 'Before sugar' : bins[step - 1].label;
      bPrev.disabled = step === 0; bNext.disabled = step === bins.length;
      live.textContent = step === 0 ? 'No districts yet. Press “Next decade”. ' + districts.length + ' districts will appear.' : (bins[step - 1].label + ': ' + shown + ' of ' + districts.length + ' districts now shown. ' + (names.length ? 'New in this decade: ' + names.join(', ') + '.' : 'No new districts in this decade.'));
      if (selected && !groups[selected].classList.contains('on')) { selected = null; detail.innerHTML = ''; }
      if (!selected) detail.innerHTML = '<p class="small">Choose a dot or a year label on the map to read its note. The full card for each district is in the list below.</p>';
    }
    function setStep(n) { step = Math.max(0, Math.min(bins.length, n)); render(); }
    function setMode(m) {
      mode = m;
      mapWrap.hidden = (m !== 'map');
      bMap.setAttribute('aria-pressed', m === 'map' ? 'true' : 'false');
      bList.setAttribute('aria-pressed', m === 'list' ? 'true' : 'false');
      bMap.classList.toggle('dark', m === 'map'); bList.classList.toggle('dark', m === 'list');
    }
    bPrev.addEventListener('click', function () { setStep(step - 1); });
    bNext.addEventListener('click', function () { setStep(step + 1); });
    bAll.addEventListener('click', function () { setStep(bins.length); });
    slider.addEventListener('input', function () { setStep(parseInt(slider.value, 10)); });
    bMap.addEventListener('click', function () { setMode('map'); });
    bList.addEventListener('click', function () { setMode('list'); });
    setMode(mode);
    var q = location.hash.split('?')[1] || '';
    if (q.indexOf('view=map') > -1) setMode('map'); else if (q.indexOf('view=list') > -1) setMode('list');
    var start = parseInt((/step=(\d)/.exec(q) || [0, '0'])[1], 10);
    setStep(isNaN(start) ? 0 : start);
    setPage('Up the coast', kids);
    var om = /open=([a-z]+)/.exec(q);
    if (om && cards[om[1]]) { cards[om[1]].open = true; }
  }

  function viewTimeline() {
    var kids = [p('These are the key dated events in this history. Each has a short explanation and its source. Where sources give different dates or details, the entry says so.', 'lead')];
    var ol = el('ol', { 'class': 'tl' });
    D.timeline.forEach(function (e) {
      var li = el('li', e.flag ? { 'class': 'flagged' } : null);
      li.appendChild(el('span', { 'class': 'tl-date', text: e.date }));
      var body = el('div', { 'class': 'tl-body' });
      body.appendChild(el('h3', { text: e.title }));
      body.appendChild(p(e.text));
      if (e.flag) body.appendChild(el('p', { 'class': 'flag' }, [badge('Sources differ', 'b-flag'), document.createTextNode(e.flag)]));
      var s = srcLinks(e.src); if (s) body.appendChild(el('p', { 'class': 'srcline' }, [s]));
      li.appendChild(body);
      ol.appendChild(li);
    });
    kids.push(ol);
    setPage('Timeline', kids);
  }

  function viewPlaces() {
    var kids = [p('Places named in the sources, with what the sources say about them. Every place is on the Country of Aboriginal people.', 'lead')];
    D.places.forEach(function (pl) {
      var a = el('article', { 'class': 'card' });
      a.appendChild(el('h2', { text: pl.name }));
      if (pl.where) a.appendChild(el('p', { 'class': 'where', text: pl.where }));
      if (pl.image) a.appendChild(figure(pl.image));
      paras(pl.text).forEach(function (x) { a.appendChild(x); });
      var s = srcP(pl.src); if (s) a.appendChild(s);
      kids.push(a);
    });
    setPage('Places', kids);
  }

  function viewPeople() {
    var kids = [p('Only real people, groups and organisations that appear in the sources are listed here. Nobody has been invented. Where a person’s own name is not known, the entry says so.', 'lead')];
    var order = [['person', 'People'], ['group', 'Groups and communities'], ['org', 'Organisations, laws and official bodies']];
    order.forEach(function (o) {
      var items = D.people.filter(function (x) { return x.kind === o[0]; });
      if (!items.length) return;
      kids.push(el('h2', { text: o[1] }));
      var wrap = el('div', { 'class': 'cards' });
      items.forEach(function (x) {
        var a = el('article', { 'class': 'card small' });
        a.appendChild(el('h3', { text: x.name }));
        if (x.dates) a.appendChild(el('p', { 'class': 'where', text: x.dates }));
        a.appendChild(p(x.text));
        if (x.image) a.appendChild(figure(x.image));
        var s = srcP(x.src); if (s) a.appendChild(s);
        wrap.appendChild(a);
      });
      kids.push(wrap);
    });
    setPage('People and groups', kids);
  }

  function viewLives() {
    var kids = [p('Short accounts of real people, taken from records. A person’s own words are quoted only where a source records them. Spelling in quotations is as the source gives it.', 'lead')];
    D.lives.forEach(function (l) {
      var a = el('article', { 'class': 'card life' });
      a.appendChild(el('h2', { text: l.name }));
      if (l.dates) a.appendChild(el('p', { 'class': 'where', text: l.dates }));
      paras(l.text).forEach(function (x) { a.appendChild(x); });
      if (l.quote) {
        var bq = el('blockquote');
        l.quote.lines.forEach(function (t) { bq.appendChild(p('“' + t + '”')); });
        bq.appendChild(el('footer', { text: l.quote.by }));
        a.appendChild(bq);
        if (l.quote.note) a.appendChild(p(l.quote.note, 'small'));
      }
      if (l.after) paras(l.after).forEach(function (x) { a.appendChild(x); });
      if (l.flag) a.appendChild(el('p', { 'class': 'flag' }, [badge('Check', 'b-flag'), document.createTextNode(l.flag)]));
      if (l.image) a.appendChild(figure(l.image));
      var s = srcP(l.src); if (s) a.appendChild(s);
      kids.push(a);
    });
    setPage('Real lives', kids);
  }

  function viewKnow() {
    var kids = [p('Facts from the sources that are worth knowing.', 'lead')];
    var wrap = el('ol', { 'class': 'know' });
    D.know.forEach(function (k) {
      var li = el('li', null, [p(k.t)]);
      var s = srcP(k.src); if (s) li.appendChild(s);
      wrap.appendChild(li);
    });
    kids.push(wrap);
    setPage('Did you know', kids);
  }

  function viewFolklore() {
    var F = D.folklore, kids = [];
    kids.push(p(F.intro, 'lead'));
    var ban = el('div', { 'class': 'folkbanner', role: 'note' }, [el('h2', { text: F.banner.head })].concat(F.banner.text.map(function (t, i) { return el('p', i === 0 ? { 'class': 'strong', text: t } : { text: t }); })));
    kids.push(ban);
    F.stories.forEach(function (s, i) {
      var a = el('article', { 'class': 'card folk' });
      a.appendChild(badge('Folklore: unproven', 'b-folk'));
      a.appendChild(el('h2', { text: s.title }));
      if (s.where) a.appendChild(el('p', { 'class': 'where', text: s.where }));
      a.appendChild(el('h3', { text: 'The story' }));
      paras(s.text).forEach(function (x) { a.appendChild(x); });
      a.appendChild(el('div', { 'class': 'folkfrom' }, [el('h3', { text: 'Where it comes from' }), p(s.from)]));
      a.appendChild(el('div', { 'class': 'folkknown' }, [el('h3', { text: 'What we actually know' })].concat(paras(s.known))));
      var sl = srcP(s.src); if (sl) a.appendChild(sl);
      
      kids.push(a);
    });
    setPage('Folklore and legends', kids);
  }

  function viewSources() {
    var kids = [p(D.sourcesIntro, 'lead')];
    kids.push(el('div', { 'class': 'panel check' }, [el('h2', { text: 'Where sources disagree, or the record has gaps' }), ul(D.disagree)]));
    kids.push(el('div', { 'class': 'care' }, [el('h2', { text: 'Care and cultural review' })].concat(paras(D.care))));
    kids.push(el('h2', { text: 'Images' }));
    kids.push(p(D.imageNote));
    kids.push(el('h2', { text: 'Source list' }));
    var list = el('ul', { 'class': 'sourcelist' });
    Object.keys(D.sources).forEach(function (k) {
      var s = D.sources[k];
      var li = el('li', null, [document.createTextNode(s.t + ' '), el('a', { href: s.u, target: '_blank', rel: 'noopener', text: s.u })]);
      if (s.note) li.appendChild(el('span', { 'class': 'snote', text: ' ' + s.note }));
      list.appendChild(li);
    });
    kids.push(list);
    setPage('Sources', kids);
  }

  

  function route() {
    var r = (location.hash || '#/').replace(/^#\/?/, '');
    renderNav(r.split('?')[0]);
    if (r === '') viewOverview();
    else if (r === 'coast' || r.indexOf('coast?') === 0) viewCoast();
    else if (r === 'timeline') viewTimeline();
    else if (r === 'places') viewPlaces();
    else if (r === 'people') viewPeople();
    else if (r === 'lives') viewLives();
    else if (r === 'know') viewKnow();
    else if (r === 'folklore') viewFolklore();
    else if (r === 'sources') viewSources();
    
    else viewOverview();
  }
  foot.appendChild(p(D.footnote));
  foot.appendChild(p(D.footer));
  window.addEventListener('hashchange', route);
  route();
})();
