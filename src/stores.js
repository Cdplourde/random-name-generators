import { writable } from 'svelte/store';

export const sidebarToggled = writable(false);

export const generatedNames = writable([]);