import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  screens: [
    {
      path: '/hardware',
      heading: 'Главная',
      sections: [],
    },
    {
      path: '/cpu',
      heading: 'Процессор',
      sections: [],
    },
    {
      path: '/bus',
      heading: 'Шины',
      sections: [],
    },
  ],
};

export const screensSlice = createSlice({
  name: 'screens',
  initialState,
  reducers: {
    addSection: (state, { payload }) => {
      const { path, sectionHeading } = payload;
      const screen = state.screens.find((el) => el.path === path);
      const sectionId = sectionHeading
        .replace(/[&/\\#,+()$~%.'":*?<>{}!]/g, '')
        .replace(/\s+/g, '_');
      screen.sections.push({
        heading: sectionHeading,
        id: sectionId,
      });
    },
  },
});

export const selectScreens = (state) => state.screens.screens;

export const { addSection } = screensSlice.actions;

export default screensSlice.reducer;
