#!/usr/bin/env node
// Builds the student version (site root) and the teacher version (teacher/) from src/.
// Run:  node build.js
// Source: src/data1.js .. data4.js, app.js, index.html, styles.css, and images/.
// Student build removes: every "teacher" key, discussion answers ("a"), teacherNotes,
//   app.js blocks between T markers, and index.html blocks between T comment markers.
const fs = require('fs'), path = require('path');
const root = __dirname, src = path.join(root, 'src');
global.window = {};
for (const f of ['data1', 'data2', 'data3', 'data4']) require(path.join(src, f + '.js'));
const SS = JSON.parse(JSON.stringify(window.SS));

function studentData(D) {
  delete D.teacherNotes;
  for (const n of Object.values(D.nodes)) delete n.teacher;
  for (const list of [D.discuss, D.write]) list.forEach(q => delete q.a);
  return D;
}
function codeMode(s, mode) {
  const other = mode === 'student' ? 'T' : 'S';
  if (mode === 'student') s = s.replace(/\/\*T\*\/[\s\S]*?\/\*\/T\*\//g, '');
  return s.replace(/\/\*\/?[T]\*\//g, '');
}
function htmlMode(s, mode) {
  if (mode === 'student') s = s.replace(/<!--T-->[\s\S]*?<!--\/T-->/g, '');
  return s.replace(/<!--\/?T-->/g, '');
}
function out(dir, mode) {
  fs.mkdirSync(dir, { recursive: true });
  let D = JSON.parse(JSON.stringify(SS));
  if (mode === 'student') D = studentData(D);
  fs.writeFileSync(path.join(dir, 'data.js'), 'window.SS=' + JSON.stringify(D) + ';\n');
  fs.writeFileSync(path.join(dir, 'app.js'), codeMode(fs.readFileSync(path.join(src, 'app.js'), 'utf8'), mode));
  let h = htmlMode(fs.readFileSync(path.join(src, 'index.html'), 'utf8'), mode);
  if (mode === 'teacher') h = h.replace('<meta name="theme-color"', '<meta name="robots" content="noindex">\n<meta name="theme-color"');
  fs.writeFileSync(path.join(dir, 'index.html'), h);
  fs.copyFileSync(path.join(src, 'styles.css'), path.join(dir, 'styles.css'));
  fs.mkdirSync(path.join(dir, 'images'), { recursive: true });
  for (const f of fs.readdirSync(path.join(root, 'images'))) fs.copyFileSync(path.join(root, 'images', f), path.join(dir, 'images', f));
}
out(root, 'student');
out(path.join(root, 'teacher'), 'teacher');
console.log('built student (/) and teacher (/teacher/)');
