import React from 'react'
import { IoLanguageOutline } from "react-icons/io5";
import { LocaleConsumer } from '../contexts/LocaleContext';

const ToggleLocale = () => {
  return (
    <LocaleConsumer>
        {({ toggleLocale }) => {
            return (
              <button
                className="toggle-locale"
                onClick={toggleLocale}
                type="button"
                aria-label="Ganti bahasa"
                title="Ganti bahasa"
              >
                <IoLanguageOutline />
              </button>
            );
        }}
    </LocaleConsumer>
  )
}

export default ToggleLocale