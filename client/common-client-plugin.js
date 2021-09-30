function register ({ registerHook, peertubeHelpers }) {
  registerHook({
    target: 'action:video-upload.init',
    handler: () => onVideoUploadInit(peertubeHelpers)
  })

  registerHook({
    target: 'action:video-url-import.init',
    handler: () => onVideoUploadInit(peertubeHelpers)
  })

  registerHook({
    target: 'action:video-torrent-import.init',
    handler: () => onVideoUploadInit(peertubeHelpers)
  })
}

function onVideoUploadInit(peertubeHelpers)
{

}

export {
  register
}
