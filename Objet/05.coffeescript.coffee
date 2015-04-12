Personne = ->
  @prenom = null
  @dateNaissance = null
  return

Personne::estAnniversaire = ->
  if @dateNaissance == null
    return false
  today = new Date
  @dateNaissance.getMonth() == today.getMonth() and @dateNaissance.getDate() == today.getDate()

Personne::souhaiteAnniversaire = ->
  console.log 'Joyeux ' + (if @estAnniversaire() then '' else 'non-') + 'anniversaire ' + @prenom + '  \\°/ !'

Personne::surprise = ->
  _this = this
  setTimeout (->
    _this.souhaiteAnniversaire()
  ), 100

personne = new Personne
personne.prenom = 'Pierre'
personne.dateNaissance = new Date(1987, 5, 1, 0, 0, 0)
personne.surprise()

console.log Object.keys(personne)