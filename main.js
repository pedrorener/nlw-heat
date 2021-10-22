const linksSocialMedia = {
  github: 'pedrorener',
  youtube: 'channel/UCYzRZrdRrrCuGC3WnWNmV1Q',
  facebook: 'pedroorener',
  instagram: 'pedro.rener',
  twitter: 'alvesxpdr'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      user.Link.href = data.html_url
      user.Image.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
