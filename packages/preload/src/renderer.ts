import { ipcRenderer } from 'electron';

export const renderer = {
  'send': ipcRenderer.send,
};
