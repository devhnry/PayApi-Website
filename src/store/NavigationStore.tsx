import { create } from 'zustand';

interface NavigationState {
	menuIsOpen: boolean;
	setMenuIsOpen: (tourIsOpen: boolean) => void;

	centerAligned: boolean;
	setCenterAligned: (tourIsOpen: boolean) => void;
}

const NavigationStore = create<NavigationState>((set) => ({
	menuIsOpen: false,
	setMenuIsOpen: (menuIsOpen) => set({ menuIsOpen }),

		centerAligned: false,
		setCenterAligned: (centerAligned) => set({ centerAligned }),

}));

export default NavigationStore;
