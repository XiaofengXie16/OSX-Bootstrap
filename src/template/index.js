export const template = (
  common,
  cask,
  framework,
  npm,
  extensions
) => `echo "Starting bootstrapping"

# Check for Homebrew, install if we don't have it
if test ! $(which brew); then
    echo "Installing homebrew..."
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
fi

# Update homebrew recipes
brew update


PACKAGES=(
${common}
)

echo "Installing packages..."
brew install \${PACKAGES[@]}

echo "Cleaning up..."
brew cleanup


CASKS=(
${cask}
)

echo "Installing cask apps..."
brew cask install \${CASKS[@]}

echo "Installing fonts..."
brew tap caskroom/fonts
FONTS=(
    font-roboto
    font-clear-sans
)
brew cask install \${FONTS[@]}


echo "Installing global npm packages..."
${framework}
${npm}
echo "Installing VS code extensions..."
${extensions}

echo "Bootstrapping complete"
`;
