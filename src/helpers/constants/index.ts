import dynamic from 'next/dynamic';
import { IThemeColor, ITemplate } from './index.interface';

export const SYSTEM_COLORS: IThemeColor[] = [
  {
    backgroundColor: 'white',
    fontColor: 'black',
    titleColor: '#1890ff',
    highlighterColor: 'yellowgreen',
    id: 1,
  },
  {
    backgroundColor: 'white',
    fontColor: '#780650',
    titleColor: '#254000',
    highlighterColor: 'burlywood',
    id: 2,
  },
  {
    backgroundColor: '#FFFFFF',
    fontColor: '#000000',
    titleColor: '#217503',
    highlighterColor: '#F556E5',
    id: 3,
  },
];

const MordernTemplate = dynamic(() => import('src/templates/modern/MordernTemplate'), {
  ssr: false,
});

const MinimalTemplate = dynamic(() => import('src/templates/minimal/MinimalTemplate'), {
  ssr: false,
});

export const AVAILABLE_TEMPLATES = {
  modern: {
    id: 'modern',
    name: 'Modern',
    component: MordernTemplate,
    thumbnail: '/templates/modern.png'
  },
  minimal: {
    id: 'minimal',
    name: 'Minimal',
    component: MinimalTemplate,
    thumbnail: '/templates/minimal.png'
  },
} as const;

export const CUSTOM_THEME_COLOR: IThemeColor = {
  backgroundColor: 'white',
  fontColor: 'black',
  titleColor: 'green',
  highlighterColor: '#ff7875',
  id: 4,
};

export const DATE_PICKER_FORMAT = 'DD/MM/YYYY';
