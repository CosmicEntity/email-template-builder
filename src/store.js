import { create } from "zustand";

export const useFieldStore = create((set) => ({
  fields: { title: "", content: "", footer: "", imageUrl: "", logoUrl: "" },
  setFields: {
    setTitle: (title) =>
      set((state) => ({ fields: { ...state.fields, title } })),
    setContent: (content) =>
      set((state) => ({ fields: { ...state.fields, content } })),
    setFooter: (footer) =>
      set((state) => ({ fields: { ...state.fields, footer } })),
    setImageUrl: (imageUrl) =>
      set((state) => ({ fields: { ...state.fields, imageUrl } })),
    setLogoUrl: (logoUrl) =>
      set((state) => ({ fields: { ...state.fields, logoUrl } })),
  },
}));

export const useFocusStore = create((set) => ({
  focus: { titleFocus: false, contentFocus: false, footerFocus: false },
  setFocus: {
    setTitleFocus: (titleFocus) =>
      set((state) => ({ focus: { ...state.focus, titleFocus } })),
    setContentFocus: (contentFocus) =>
      set((state) => ({ focus: { ...state.focus, contentFocus } })),
    setFooterFocus: (footerFocus) =>
      set((state) => ({ focus: { ...state.focus, footerFocus } })),
  },
}));
