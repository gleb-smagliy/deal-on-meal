import { parse } from 'url';

export default (template, url) =>
{
  const pathnameParts = parse(url).pathname.split('/');
  const templateParts = (template[0] == '/' ? template.slice(1) : template).split('/');

  return templateParts.reduce((acc, cur, i) => {
    if (cur[0] == '{' && cur[cur.length - 1] == '}')
    {
      acc[cur.slice(1, cur.length-1)] = pathnameParts[i];
    }

    return acc;
  }, {});
}
