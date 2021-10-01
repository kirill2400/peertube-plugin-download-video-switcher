async function register ({
  registerSetting
}) {
  registerSetting({
    name: 'deny-download-video',
    label: 'Force forbid download',
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
