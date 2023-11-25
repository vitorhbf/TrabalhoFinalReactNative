import * as Font from 'expo-font';
import { useEffect } from 'react';

export default function CarregaFonte(callback) {
  useEffect(() => {
    loadFonts(callback);
  }, []);

  async function loadFonts(callback) {
    try {
      await Font.loadAsync({
        'BeaufortforLOLBold': require('../../../assets/fonts/BeaufortforLOL-Bold.ttf'),
        'BeaufortforLOLRegular': require('../../../assets/fonts/BeaufortforLOL-Regular.ttf'),
      });
      callback();
    } catch (error) {
      console.error('Erro ao carregar a fonte:', error);
    }
  }
}
