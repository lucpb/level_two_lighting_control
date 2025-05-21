// src/hooks/useColorTable.ts
import { useState, useEffect } from 'react';
import type { ColorTable } from '../types/ColorTable';

export function useColorTable() {
  const [data, setData] = useState<ColorTable | null>(null);

  useEffect(() => {
    fetch('/colorTable.json')
      .then(res => res.json() as Promise<ColorTable>)
      .then(setData);
  }, []);

  return data;
}