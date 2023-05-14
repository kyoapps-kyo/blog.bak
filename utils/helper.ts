type DebounceFunction = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
) => T;
type ThrottleFunction = <T extends (...args: any[]) => void>(
  func: T,
  threshHold: number
) => T & { clear(): void };
type PostTitleFormat = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
) => T;

// 声明一个通用的防抖函数类型
const debounce: DebounceFunction = function <
  T extends (...args: any[]) => void
>(func: T, delay: number): T {
  let timer: NodeJS.Timeout | null;
  return function (this: any, ...args: any[]) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
      timer = null;
    }, delay);
  } as T;
};

const throttle: ThrottleFunction = function <
  T extends (...args: any[]) => void
>(func: T, threshHold: number): T & { clear(): void } {
  let lastExecTime = 0;
  let timer: ReturnType<typeof setTimeout> | null;

  function clearTimer() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }

  function throttled(this: any, ...args: any[]) {
    const now = Date.now();
    const elapsed = now - lastExecTime;
    if (elapsed >= threshHold) {
      clearTimer();
      lastExecTime = now;
      func.apply(this, args);
    } else if (!timer) {
      timer = setTimeout(() => {
        clearTimer();
        lastExecTime = Date.now();
        func.apply(this, args);
      }, threshHold - elapsed);
    }
  }

  throttled.clear = clearTimer;

  return throttled as T & { clear(): void };
};

function buildString(length: number, start: string, end: string, fill: string): string {
  if (length <= 0) {
    throw Error('Length must be greater than 0');
  }
  if (start.length + end.length >= length) {
    throw Error('String length is too short');
  }
  const fillLength = length - start.length - end.length;
  const fillCount = Math.ceil(fillLength / fill.length);
  const fillString = fill.repeat(fillCount).slice(0, fillLength);
  return start + fillString + end;
}

const stringToArray = (str: string) => str.split(" ");
export { throttle, debounce, stringToArray, buildString };
