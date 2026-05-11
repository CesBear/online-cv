import '@testing-library/jest-dom';

// Canvas is not implemented in jsdom — mock getContext so canvas-based
// components render without errors in tests.
const mockCtx = {
  clearRect: jest.fn(),
  fillRect: jest.fn(),
  strokeRect: jest.fn(),
  drawImage: jest.fn(),
  putImageData: jest.fn(),
  getImageData: jest.fn(),
  createImageData: (w, h) => ({ data: new Uint8ClampedArray(w * h * 4) }),
  createLinearGradient: () => ({ addColorStop: jest.fn() }),
  createRadialGradient: () => ({ addColorStop: jest.fn() }),
  beginPath: jest.fn(),
  closePath: jest.fn(),
  moveTo: jest.fn(),
  lineTo: jest.fn(),
  arc: jest.fn(),
  fill: jest.fn(),
  stroke: jest.fn(),
  fillText: jest.fn(),
  strokeText: jest.fn(),
  measureText: () => ({ width: 0 }),
  save: jest.fn(),
  restore: jest.fn(),
  scale: jest.fn(),
  translate: jest.fn(),
  clip: jest.fn(),
  setLineDash: jest.fn(),
  imageSmoothingEnabled: false,
  imageSmoothingQuality: 'high',
  lineWidth: 1,
  fillStyle: '',
  strokeStyle: '',
  globalAlpha: 1,
  font: '',
  textAlign: 'left',
  textBaseline: 'alphabetic',
  shadowColor: '',
  shadowBlur: 0,
};

HTMLCanvasElement.prototype.getContext = () => mockCtx;

// IntersectionObserver is not implemented in jsdom
global.IntersectionObserver = class {
  constructor(cb) { this.cb = cb; }
  observe()    {}
  unobserve()  {}
  disconnect() {}
};
