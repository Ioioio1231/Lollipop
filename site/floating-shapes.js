const containers = [
  { selector: '.floating-shapes', color: 'white', interval: 350 },
  { selector: '.floating-shapes-2', color: 'white', interval: 50 },
  { selector: '.floating-shapes-3', color: 'white', interval: 50 },
  { selector: '.floating-shapes-4', color: 'white', interval: 350 },
  { selector: '.floating-shapes-5', color: 'white', interval: 250 },
  { selector: '.floating-shapes-6', color: 'purple', interval: 200 },
  { selector: '.floating-shapes-7', color: 'purple', interval: 200 },
  { selector: '.floating-shapes-8', color: 'purple', interval: 100 }
];

function createFloatingShape(container, color = 'white') {
  const shape = document.createElement('div');
  shape.className = 'floating-shape';


  shape.classList.add(
    color === 'purple' ? 'floating-shape-purple' : 'floating-shape-white'
  );

  const size = Math.random() * 70 + 5;
  shape.style.width = `${size}px`;
  shape.style.height = `${size}px`;
  shape.style.left = `${Math.random() * 100}%`;
  shape.style.top = `${Math.random() * 100}%`;

  container.appendChild(shape);

  setTimeout(() => shape.remove(), 4000);
}


containers.forEach(({ selector, color, interval }) => {
  const el = document.querySelector(selector);
  if (!el) return;

  setInterval(() => createFloatingShape(el, color), interval);
});
