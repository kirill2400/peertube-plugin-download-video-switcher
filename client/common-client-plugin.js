function register ({ registerHook, peertubeHelpers }) {
  registerHook({
    target: 'action:modal.video-download.shown',
    handler: () => onShowDownloadModal(peertubeHelpers)
  })
}

function onShowDownloadModal(peertubeHelpers)
{
  peertubeHelpers.getSettings()
    .then(async s => {
      if (!s || !s['deny-download-video'] || s['deny-download-video'] === false)
      {
        console.log(s);
        console.log(s);
        return;
      }

      document.querySelector(".modal.show .modal-content .modal-body").innerHTML = "<h1 style='text-align: center;'>" + await peertubeHelpers.translate("DenyCaption") + "</h1>";
      document.querySelector(".modal.show .modal-content .modal-footer.inputs input[type=submit]").disabled = true
    });
}

export {
  register
}
