import React from 'react';
import { createRoot } from 'react-dom/client';
import TextSongPage from '../../Router/text/TextSongPage.jsx';

createRoot(document.querySelector('.page')).render(
	<TextSongPage />,
);
