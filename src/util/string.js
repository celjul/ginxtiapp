export function UnescapeCharacters(value){
  value = value.replace('&aacute', 'á');
  value = value.replace('&eacute', 'é');
  value = value.replace('&iacute', 'í');
  value = value.replace('&oacute', 'ó');
  value = value.replace('&uacute', 'ú');
}
