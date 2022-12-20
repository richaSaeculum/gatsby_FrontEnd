import React, { useEffect, useState } from 'react';
import { ModalWrapper, NewsletterDescription, NewsletterInnerWrapper, NewsletterInputWrapper, NewsletterTitle, NewsletterWrapper } from './AdBlocker.style';

const AdBlockerComponent = ({ isAdBlocker = false }) => {

  console.log(isAdBlocker, "isAdBlocker in ad blocker")

  const [open, setOpen] = useState();

  useEffect(() => {
    setOpen(isAdBlocker)
  }, [isAdBlocker])


  return (
    <div className={`modal fade ${open && 'show'}`}>
      <ModalWrapper>
        <div className="modal-content">
          <NewsletterWrapper>
            <NewsletterInnerWrapper>
              <NewsletterTitle>
                Please Turn Off Your Ad Blockers And Reload The Page
              </NewsletterTitle>
              <NewsletterDescription>
                Kindly Check your extension panel and close all the adblocker to see blog.
              </NewsletterDescription>
            </NewsletterInnerWrapper>
          </NewsletterWrapper>
        </div>
      </ModalWrapper>
    </div>
  )
}

export default AdBlockerComponent
