/**
 * Set fullscreen orientation
 * @param element Element
 * @param options Options
 * @param handlerCallback Handler callback
 * @returns Remove handler
 */
export function fullscreen(element: Element, orientation: OrientationLockType, handlerCallback?: (fullscreenState: boolean) => void) {
  function fullscreenHandler() {
    let isFull = false;
    if (document.fullscreenElement) {
      isFull = true;
      screen.orientation.lock(orientation);
    } else {
      isFull = false;
      screen.orientation.unlock();
    }

    if (typeof handlerCallback === 'function') {
      handlerCallback(isFull);
    }
  }

  function removeEventHandler() {
    element.removeEventListener('fullscreenchange', fullscreenHandler, true);
  }

  element.addEventListener('fullscreenchange', fullscreenHandler, true);

  return removeEventHandler;
}
