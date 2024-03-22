  window.watsonAssistantChatOptions = {
    integrationID: "8c055c89-10e6-4fd4-b654-5287b5269f32", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "5a62ac15-9d12-480c-a0b3-67b8eacf4c41", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
