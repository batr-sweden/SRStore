const accountList = [
  {
      title: 'Företags information',
      icon: 'account',
      navigate: 'compInfo',
      type: 'material-community'
    },
    {
      title: 'Redigera profil',
      icon: 'account-settings-variant',
      navigate: 'UserSettings',
      type: 'material-community'
    },
    {
      title: 'Skapade checkar',
      icon: 'barcode-scan',
      navigate: 'Check',
      type: 'material-community',
      color: '#f50'
    },
];
const supportList = [
{
  title: 'Kontakta oss',
  icon: 'email-outline',
  navigate: 'contact',
  type: 'material-community'
},
{
  title: 'FAQ',
  icon: 'help-circle-outline',
  navigate: 'FAQ',
  type: 'material-community'
},
{
  title: 'App version: 0.01',
  icon: 'information-outline',
  navigate: '',
  type: 'material-community'
},
];
const termsList = [
{
  title: 'Villkor & Policy',
  icon: 'file-document-box',
  navigate: 'terms',
  type: 'material-community'
},
];
const moreList = [
{
  title: 'Tipsa vänner',
  icon: 'contacts',
  navigate: '',
  color: '#8b9dc3',
  type: 'material-community'
},
{
    title: 'Dela på Facebook',
    icon: 'facebook-box',
    navigate: '',
    color: '#3b5998',
    type: 'material-community'
  },
];

export { accountList, supportList, termsList, moreList };
