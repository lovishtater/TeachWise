import avatarPost1 from '../../../../assets/images/application/user/social-profile/img-user.41a8c066.png';

import avatarPost2 from '../../../../assets/images/application/user/social-profile/download.png';
import imagePost2 from '../../../../assets/images/application/user/social-profile/img-post1.png';
import avatarCmt1Post2 from '../../../../assets/images/application/user/social-profile/download1.png';
import avatarCmt2Post2 from '../../../../assets/images/application/user/social-profile/download2.png';
import avatarCmt3Post2 from '../../../../assets/images/application/user/social-profile/download3.png';

import avatarPost3 from '../../../../assets/images/application/user/social-profile/download4.png';
import imagePost3 from '../../../../assets/images/application/user/social-profile/img-profile2.071c9e98.jpg';

export const datapost = [
    {
        id: 0,
        avatar: avatarPost1,
        datetime: '2021-07-29T15:56:51+07:00',
        contentPost: `Commodo amet veniam nostrud mollit quis sint qui nulla elit esse excepteur ullamco esse magna. Nisi duis aute est in mollit irure enim tempor in \n\n Commodo amet veniam nostrud mollit quis sint qui nulla elit esse excepteur ullamco esse magna. Nisi duis aute est in mollit irure enim tempor in.`,
        imagePost: [],
        numberOfLike: 0,
        likePost: 'false',
        comment: []
    },
    {
        id: 1,
        avatar: avatarPost2,
        datetime: '2021-07-29T15:56:51+07:00',
        contentPost:
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. There are many variations of passages.',
        imagePost: [imagePost2],
        numberOfLike: 102,
        likePost: 'true',
        comment: [
            {
                id: 0,
                imageCmt: avatarCmt1Post2,
                contentComment: 'It is a long established fact that a reader will be distracted by the readable content of a page.',
                numberOfLike: 55,
                like: 'true',
                idpost: 1,
                reply: []
            },
            {
                id: 1,
                imageCmt: avatarCmt2Post2,
                contentComment:
                    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.There are many variations of passages.',
                numberOfLike: 68,
                like: 'true',
                idpost: 1,
                reply: [
                    {
                        imageCmt: avatarCmt3Post2,
                        contentReply:
                            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.There are many variations of passages.',
                        numberOfLike: 10,
                        like: 'true'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        avatar: avatarPost3,
        datetime: '2021-07-29T15:56:51+07:00',
        contentPost: 'It is a long established fact that a reader will be distracted by the readable content of a page',
        imagePost: [imagePost2, imagePost3],
        numberOfLike: 150,
        likePost: 'false',
        comment: [
            {
                id: 0,
                imageCmt: avatarCmt1Post2,
                contentComment:
                    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                numberOfLike: 65,
                like: true,
                idpost: 2,
                reply: []
            }
        ]
    },
    {
        id: 3,
        avatar: avatarPost1,
        datetime: '2021-07-29T15:56:51+07:00',
        contentPost: '',
        imagePost: [],
        urlVideo: 'vyJU9efvUtQ',
        numberOfLike: 540,
        likePost: 'true',
        comment: []
    }
];
