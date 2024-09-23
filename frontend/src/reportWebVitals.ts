import { onLCP, onINP, onCLS } from 'web-vitals';
const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry);
    onINP(onPerfEntry);
    onLCP(onPerfEntry);
    onINP(onPerfEntry);
  }
};

export default reportWebVitals;
