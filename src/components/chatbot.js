
import React, { useEffect } from 'react';

function ChatBot() {
  useEffect(() => {
    // Inject the first script for Botpress webchat
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v2.2/inject.js';
    script1.async = true;

    // Error handling for script loading failure
    script1.onerror = () => {
      console.error('Failed to load Botpress webchat script');
    };

    // Onload of the first script, load the second script for custom configurations
    script1.onload = () => {
      const script2 = document.createElement('script');
      script2.src = 'https://files.bpcontent.cloud/2024/10/12/12/20241012121117-4XNSKHS3.js';
      script2.async = true;

      // Error handling for script loading failure
      script2.onerror = () => {
        console.error('Failed to load the custom configuration script');
      };
      
      document.body.appendChild(script2);
    };

    // Append the first script to the document body
    document.body.appendChild(script1);

    // Cleanup function to remove scripts on component unmount
    return () => {
      document.body.removeChild(script1);
      // Ensure script2 is also removed when the component is unmounted
      const script2 = document.querySelector('script[src="https://files.bpcontent.cloud/2024/10/12/12/20241012121117-4XNSKHS3.js"]');
      if (script2) {
        document.body.removeChild(script2);
      }
    };
  }, []);

  return (
    <div style={{ position: 'relative', height: '600px' }}>
      <iframe
        src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/10/12/12/20241012121118-3WFSZHVO.json"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Chatbot"
      />
    </div>
  );
}

export default ChatBot;
