chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    if(details.url.includes("ajax/mercury/mark_seen") ||
      details.url.includes("ajax/notifications/mark_read") ||
      details.url.includes("ajax/gigaboxx/endpoint/UpdateLastSeenTime") ||
      details.url.includes("reconnect") ||
      details.url.includes("friendjewel/friendconfirmednotifications") ||
      details.url.includes("active_ping") ||
      details.url.includes("mercury/change_read_status.php")
      )
    {
      return {cancel: true}
    } else if (details.url.includes(".com/pull")) {
      var replaceUrl = details.url.replace(/active/i, 'offline');
      return {redirectUrl: replaceUrl};
    }
  },
  {urls: ["*://*.facebook.com/*", "*://*.messenger.com/*"]},
  ["blocking"]
);
