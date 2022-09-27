import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { ctx } from '../App/AppContext';

export default function Footer() {
  return (
    <ctx.Consumer>
      {(context) => (
        <footer className="App-footer">
          <p>Copyright {getFullYear()} - {getFooterCopy(true)} </p>
          {context.user.isLoggedIn && (
            <p>
              <a>Contact us</a>
            </p>
          )}
        </footer>
      )}
    </ctx.Consumer>
  );
}
