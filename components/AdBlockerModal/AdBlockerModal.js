import React, { useEffect, useState } from 'react';
import { ModalWrapper, NewsletterDescription, NewsletterInnerWrapper, NewsletterInputWrapper, NewsletterTitle, NewsletterWrapper } from './AdBlockerModal.style';

const AdBlockerModal = ({ isAdBlocker = false }) => {

  console.log(isAdBlocker, "isAdBlocker in ad blocker")

  const [open, setOpen] = useState();

  useEffect(() => {
    setOpen(isAdBlocker);

    if (isAdBlocker) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    
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

export default AdBlockerModal
