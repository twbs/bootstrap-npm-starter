import './scss/starter.scss';

// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)

// import * as bootstrap from 'bootstrap';


// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
import "@popperjs/core/dist/umd/popper.min.js";

// Import the required DOM management plugins first
import "bootstrap/js/dist/dom/data.js";
import "bootstrap/js/dist/dom/event-handler.js";
import "bootstrap/js/dist/dom/manipulator.js";
import "bootstrap/js/dist/dom/selector-engine.js";
import "bootstrap/js/dist/base-component.js";

// Then your specific components
import "bootstrap/js/dist/dropdown.js";
import "bootstrap/js/dist/offcanvas.js";
