export type HandlerCallback = (fullscreenState: boolean, fullscreenElement: Element | null) => void;

/**
 * Set fullscreen orientation
 * @param orientation OrientationLockType
 * @param handlerCallback Handler callback
 * @returns Remove handler
 */
function fullscreen(orientation: OrientationLockType, handlerCallback?: HandlerCallback): () => void;
/**
 * Set fullscreen orientation
 * @param element Element
 * @param orientation OrientationLockType
 * @param handlerCallback Handler callback
 * @returns Remove handler
 */
function fullscreen(element: Element, orientation: OrientationLockType, handlerCallback?: HandlerCallback): () => void;
/**
 * Set fullscreen orientation
 * @param elementOrOrientation Element or OrientationLockType
 * @param orientationOrHandlerCallback OrientationLockType or Handler callback
 * @param handlerCallback Handler callback
 * @returns Remove handler
 */
function fullscreen(
  elementOrOrientation: Element | OrientationLockType,
  orientationOrHandlerCallback?: OrientationLockType | HandlerCallback,
  handlerCallback?: HandlerCallback
): () => void {
  function fullscreenHandler() {
    let isFull = false;
    const fullEle = document.fullscreenElement;

    let lockType: OrientationLockType;

    if (typeof elementOrOrientation === 'string') {
      lockType = elementOrOrientation;
    } else if (typeof orientationOrHandlerCallback === 'string') {
      lockType = orientationOrHandlerCallback;
    } else {
      return;
    }

    if (fullEle) {
      isFull = true;
      screen.orientation.lock(lockType);
    } else {
      isFull = false;
      screen.orientation.unlock();
    }

    if (typeof orientationOrHandlerCallback === 'function') {
      orientationOrHandlerCallback(isFull, fullEle);
    } else if (typeof handlerCallback === 'function') {
      handlerCallback(isFull, fullEle);
    }
  }

  const element = typeof elementOrOrientation === 'string' ? document : elementOrOrientation;
  element.addEventListener('fullscreenchange', fullscreenHandler, true);

  function removeEventHandler() {
    element.removeEventListener('fullscreenchange', fullscreenHandler, true);
  }

  return removeEventHandler;
}

export { fullscreen };
