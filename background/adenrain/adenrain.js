class Drop {
  constructor(color, deep, xMin, xMax) {
    this.node = document.createElement('DIV');
    this.color = color;
    this.z = Math.round(Math.random()*deep);
    this.x = Math.round(Math.random()*(xMax-xMin))+xMin;
  }

  // public
  init(context) {
    const coeff = 1/((0.9*this.z)+1);
    const height = 42*coeff;
    const width = 4*coeff;

    this.node.style.position = 'absolute';
    this.node.style.left = String(this.x) + '%';
    this.node.style.height = String(height) + 'px';
    this.node.style.width = String(width) + 'px';
    this.node.style.backgroundColor = this.color;

    this.node.style.top = String(-height) + 'px';
    this.node.style.transitionProperty = 'top';
    this.node.style.transitionTimingFunction = 'cubic-bezier(0.25, 0, 0.8, 0.3)';

    context.appendChild(this.node);
  }

  // public
  drop(gravity) {
    var drop = this;
    const coeff = (this.z+1) * 0.42;
    const duration = (1/gravity)*coeff; //sec
    const delay = Math.round(Math.random()*500); //ms

    setTimeout(function () {
      drop.node.style.transitionDuration = String(duration) + 's';
      drop.node.style.top = '100%';
      drop.node.style.opacity = '1';
    }, delay);

    setTimeout(function () {
      drop.remove();
    }, (Math.round(duration*1000))+delay);
  }

  remove() {
    this.node.parentNode.removeChild(this.node);
  }

}

class Rain {
  constructor(nodeId) {
    this.node = document.getElementById(nodeId);

    // public
    this.density = 64;
    this.gravity = 0.98;
    this.colorSet = ['red'];
    this.xMin = 0;
    this.xMax = 100;
    this.deep = 3;
  }

  getColor() {
    const length = this.colorSet.length;
    const randomIndex = Math.round(Math.random()*length)%length;
    return this.colorSet[randomIndex];
  }

  // public
  init() {
    this.initBoxStyle();
  }

  // public
  loop() {
    var rain = this;
    var timeout = 1000/this.density;

    setTimeout(function () {

      if (rain.isVisible()) {
        rain.dropDrop();
      }
      else {
        timeout = 500;
      }

      rain.loop();
    }, timeout);
  }

  // private
  initBoxStyle() {
    this.node.style.position = 'relative';
    this.node.style.overflow = 'hidden';
  }

  // private
  dropDrop() {
    var drop = new Drop(this.getColor(), this.deep, this.xMin, this.xMax);
    drop.init(this.node);
    drop.drop(this.gravity);
  }

  // private
  isVisible() {
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    var rect = this.node.getBoundingClientRect();
    return !(rect.bottom < 0 || rect.top >= viewHeight);
  }

}

//var rain = new Rain('rainBox');
//rain.density = 64;
//rain.gravity = 0.98;
//rain.colorSet = ['red', 'rgb(0, 255, 0)', 'blue', 'gold'];
//rain.xMin = 0;
//rain.xMax = 100;
//rain.deep = 3;

//rain.init();
//rain.loop();
