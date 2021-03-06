module.exports = {
  brew: [
    // http://conqueringthecommandline.com/book/ack_ag
    'ack',
    'ag',
    // Install GNU core utilities (those that come with macOS are outdated)
    // Don’t forget to add `$(brew --prefix coreutils)/libexec/gnubin` to `$PATH`.
    'coreutils',
    'dos2unix',
    // Install GNU `find`, `locate`, `updatedb`, and `xargs`, `g`-prefixed
    'findutils',
    'fortune',
    'readline', // ensure gawk gets good readline
    'gawk',
    'gnupg',
    // Install GNU `sed`, overwriting the built-in `sed`
    // so we can do "sed -i 's/foo/bar/' file" instead of "sed -i '' 's/foo/bar/' file"
    'gnu-sed --with-default-names',
    // better, more recent grep
    'homebrew/dupes/grep',
    // https://github.com/jkbrzt/httpie
    'httpie',
    // jq is a sort of JSON grep
    'jq',
    // Mac App Store CLI: https://github.com/mas-cli/mas
    'mas',
    // Install some other useful utilities like `sponge`
    'moreutils',
    'nmap',
    'openconnect',
    'reattach-to-user-namespace',
    // better/more recent version of screen
    'homebrew/dupes/screen',
    'tmux',
    'tree',
    'ttyrec',
    // better, more recent vim
    'vim --with-override-system-vi',
    'watch',
    // Install wget with IRI support
    'wget --enable-iri'
  ],
  cask: [
    '1password',
    'alfred',
    'appcleaner',
    'airtable',
    'android-studio',
    'android-file-transfer',
    'audio-hijack',
    'bartender',
    'bear',
    'cleanshot',
    'daisydisk',
    'fantastical',
    'firefox',
    'forecast',
    'github',
    'google-chrome',
    'hey',
    'iterm2',
    'imageoptim',
    'insomnia',
    'macvim',
    'notion',
    'phpstorm',
    'loom',
    'loopback',
    'sip',
    'sizzy',
    'slack',
    'spotify',
    'soundsource',
    'rocket',
    'tableplus',
    'the-unarchiver',
    'tinkerwell',
    'tripmode',
    'transmit',
    'tunnelbear',
    'visual-studio-code',
    'vlc',
    'zoomus',
  ],
  gem: [
    'git-up'
  ],
  npm: [
    'antic',
    'buzzphrase',
    'eslint',
    'gulp',
    'npm-check',
    'prettyjson',
    'trash',
    'vtop'
  ]
};
