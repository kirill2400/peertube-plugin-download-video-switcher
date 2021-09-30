async function register ({
  registerHook,
  registerSetting,
  settingsManager,
  storageManager,
  videoCategoryManager,
  videoLicenceManager,
  videoLanguageManager
}) {
  const { translate } = peertubeHelpers
  registerSetting({
    name: 'defaultDownloadVideoToggle',
    label: await translate('DefaultValueDownloadVideo'),
    type: 'input-checkbox',
    private: false
  })
}

async function unregister () {
  return
}

module.exports = {
  register,
  unregister
}
