
import '@testing-library/jest-dom';
process.on('warning', (warning) => {
    if (warning.name === 'DeprecationWarning' && warning.code === 'DEP0040') {
      // Suppress the warning
    } else {
      console.warn(warning);
    }
  });
  