import { useEffect } from 'react';

import { StyledButton } from '../atoms';
import Image from 'next/image';

export const PrintResume = () => {
  useEffect(() => {
    globalThis?.addEventListener('beforeprint', () => {
      globalThis.document.title = `Resume_Builder_${Date.now()}`;
    });

    globalThis?.addEventListener('afterprint', () => {
      globalThis.document.title = 'Single Page Resume Builder';
    });
  }, []);

  return (
    <StyledButton
      variant="text"
      onClick={() => {
        window.print();
      }}
      startIcon={
        <Image src="/icons/print.svg" alt="Print" width="20" height="20" className="invert" />
      }
    >
      Print
    </StyledButton>
  );
};
