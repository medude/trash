var addFunctionOnWindowLoad = function (callback) {
      if (window.addEventListener) {
          window.addEventListener('load',callback,false);
      } else {
          window.attachEvent('onload',callback);
      }
}