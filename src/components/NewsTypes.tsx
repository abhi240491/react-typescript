export type NewsFormat = {
    source: {
      id: string;
      name: string;
    };
    author: String;
    title: string;
    description: string;
    url: string;
    urlToImage: string; //works for 'String'
    publishedAt: String;
    content: string;
  };