import React, { useState } from 'react';
import { ContentProvider } from './ContentContext';
import CMSPage from './CMSPage';
import MainApp from './MainApp';

type PageType = 'main' | 'cms';

export default function AppRouter() {
  const [currentPage, setCurrentPage] = useState<PageType>('main');

  // Check if we're in admin mode (could be based on URL params, auth, etc.)
  const isAdminMode = new URLSearchParams(window.location.search).has('admin');

  return (
    <ContentProvider>
      <div className="min-h-screen">
        {/* Admin Toggle Button */}
        {(isAdminMode || currentPage === 'cms') && (
          <div className="fixed top-4 right-4 z-50">
            <button
              onClick={() => setCurrentPage(currentPage === 'main' ? 'cms' : 'main')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
            >
              {currentPage === 'main' ? 'Edit Content' : 'View Site'}
            </button>
          </div>
        )}

        {/* Route to appropriate page */}
        {currentPage === 'cms' ? (
          <CMSPage onPreview={() => setCurrentPage('main')} />
        ) : (
          <MainApp />
        )}
      </div>
    </ContentProvider>
  );
}