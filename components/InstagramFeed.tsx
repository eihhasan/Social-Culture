import React from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';

const InstagramFeed: React.FC = () => {
  // Placeholder data to mimic Social Culture's feed vibe
  const posts = [
    {
      id: 1,
      img: "https://scontent.cdninstagram.com/v/t51.75761-15/499577908_18051615548368360_8132639747555002309_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=X-3v45jAKWAQ7kNvwEfZ1r8&_nc_oc=AdlnhtX-ajv6sZtVD5tZkZuTkxSEy725dKPtGVO6DLoaBW3R538b9kvJGIHSVM0HlsKmI9RY8zKuURrJnSwQCdqu&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=JI-SsjFxcvCM1JY-QoiwEA&oh=00_Afpk03LfO25Ge7iErC4Bm-jIz9Ka6w_wNORvNXDF92Oipw&oe=69764C73",
      link: "https://www.instagram.com/reel/DJ1HYutJ0VP/",
      likes: "2.4k",
      comments: "82"
    },
    {
      id: 2,
      img: "https://scontent.cdninstagram.com/v/t51.75761-15/496667960_18050686181368360_6781737739183750289_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=PWVXishs2jwQ7kNvwEuxDQj&_nc_oc=AdkYFm5AFJYtjWxknoYjl5FO04LgxSFI8TJyjub-4WFbZXUQGREdOi7bS_vtqTHKezo3V563yhTgR0CFIaXqWFti&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=dTDQPIK0lgmenIRTOAOgvQ&oh=00_AfrjAwoc99m-8KvL-RebdbKYEKnncf7cutRe3arQ-3WlOw&oe=6976445F",
      link: "https://www.instagram.com/reel/DJcMr2xSyLv/",
      likes: "1.8k",
      comments: "54"
    },
    {
      id: 3,
      img: "https://scontent.cdninstagram.com/v/t51.75761-15/496102106_18020338340698019_6261170792994195988_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=104&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=dBpNLDQ1DX0Q7kNvwEizM3U&_nc_oc=AdmeUuikwHh48UxNFcb54VJqHlDE5oQ6nz1blyrVQMzFFQ3IhSHlnpLYxR8Rr69owi2j7OrwtJM9hfy0WHD-xZXI&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=zfQnbS8dPuC409_UgR3-Qg&oh=00_AfqK43rmOf_07A6Uya_VStgWRsH8E6MJO8MCCpjQ_cLDHA&oe=69765422",
      link: "https://www.instagram.com/reel/DJeBeULREsZ/",
      likes: "3.1k",
      comments: "126"
    },
    {
      id: 4,
      img: "https://scontent.cdninstagram.com/v/t51.71878-15/619482747_1916982519252944_834156431308326614_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=aOP-J9tavQoQ7kNvwGraxl5&_nc_oc=AdmJ57r2hDpFm8JgcJE5eLZdHOXyCPeRm33GeR25EAxPqwoEHyDUE4FmGCN59TSN2VCU89RdVXf701Sf6vjiRwhL&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=oUt_iXZAW9QPRyt6o9_s4w&oh=00_Afo7P_2TzlrV9g2sxG2K_pvy7dz7K5r7ZbAZzVOTmknZJA&oe=69767858",
      link: "https://www.instagram.com/reel/DTvD1l9kvMI/",
      likes: "1.5k",
      comments: "43"
    },
    {
      id: 5,
      img: "https://scontent.cdninstagram.com/v/t51.71878-15/619136080_1964764977586771_1855301896103529314_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=101&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=FAO6cofX5zMQ7kNvwGQXs66&_nc_oc=AdkBfmjBCPUKwYHGIqexgqj7UUEfI50pT9uxK_-19imvqVAwFw8eGkm53luxbVNL0xXvrNYcks9XZkosG145HyJ2&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=EXhAs65ppRPUmFtopow2BQ&oh=00_AfqMZvPtCmUZ11LCAor6QMMQo-rIMxVW0VnivXOm-qPxBA&oe=69765CB1",
      link: "https://www.instagram.com/reel/DTs2ILNksOT/",
      likes: "4.2k",
      comments: "215"
    },
    {
      id: 6,
      img: "https://scontent.cdninstagram.com/v/t51.71878-15/619084496_1264285168939483_8441453606636405419_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=106&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=tcTjmGWd3FoQ7kNvwHYJhGX&_nc_oc=AdlQYVuwPkGqW-erVUqngGfrfgjqo1KYZG6OtRZDezxhjSrUYfk3cZCpqtcqZ0eb57MIyzKL--IKZVQ1Ktek5m_5&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=OASci9MiS9UXh_E0tdc5kA&oh=00_Afo8E4NFAEpPTUc7XD-HgC5QQQS-lK_CdI5HSAiPoGm0Kw&oe=69764E83",
      link: "https://www.instagram.com/reel/DTndnmCkl-h/",
      likes: "2.8k",
      comments: "95"
    },
  ];

  return (
    <section id="instagram" className="pb-16 bg-neutral-900 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl md:text-5xl font-bold mb-2">The <span className="text-gold-400">Social</span> Feed</h2>
            <p className="text-gray-400 flex items-center justify-center md:justify-start gap-2">
              <Instagram size={16} /> @social_culture_sc
            </p>
          </div>
          <a
            href="https://www.instagram.com/social_culture_sc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-white border border-white/20 px-8 py-3 rounded-full hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all mt-8 md:mt-0"
          >
            <span className="font-medium">Follow Us</span>
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl bg-neutral-800 border border-white/5 cursor-pointer block"
            >
              <img
                src={post.img}
                alt="Social Culture Reel"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-8 text-white backdrop-blur-[2px]">
                <div className="flex flex-col items-center gap-1">
                  <Heart className="fill-white text-white" size={24} />
                  <span className="font-bold text-sm">{post.likes}</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <MessageCircle className="fill-white text-white" size={24} />
                  <span className="font-bold text-sm">{post.comments}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section >
  );

};

export default InstagramFeed;