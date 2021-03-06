/** 
 * friendsArray - contains a list of objects to be compared against the user information generated by the survey
 * scores  - used as the point of comparison
 * name & image - for chosen object, will be returned to the user
 */

var friendsArray = [
    {
        name: 'Jordan', 
        image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/22/07/Jordan-Spieth.jpg',
        scores: [ '1', '2', '3', '4', '5', '5', '4', '3', '2', '1' ] 
        
    }, 
    {
        name: 'Bubba', 
        image: 'https://media.golfdigest.com/photos/59f9cc938d84a5239d85eaac/master/w_768,c_limit/GettyImages-841963358.jpg',
        scores: ['3', '5', '2', '4', '1', '4', '3', '2', '4', '5'  ]
    },
    {
        name: 'Suzanne', 
        image: 'https://www.golfchannel.com/sites/golfchannel.prod.acquia-sites.com/files/6/8/1/%7B6812A411-7E06-43A7-ACBB-8598F134D4EA%7D448689.Jpeg',
        scores: ['4', '4', '3', '1', '5', '2', '1', '1', '3', '3'  ]
    }, 
    {
        name: 'Lydia', 
        image: 'https://media.golfdigest.com/photos/55db63aa4759c60c0823dd71/master/pass/lydia-ko-canadian-pacific-womens-open-style.jpg',
        scores: ['2', '3', '1', '2', '3', '1', '5', '4', '1', '2'  ]
    },
    {
        name: 'Paula', 
        image: 'https://41.media.tumblr.com/69c27eb3cb36fa95ae47ccc358b5c77a/tumblr_nn7tmnKOJS1qem99po1_1280.jpg',
        scores: ['5', '3', '5', '5', '2', '1', '2', '5', '5', '2'  ]
    }, 
    {
        name: 'Lexi', 
        image: 'https://www.teamusa.org/-/media/TeamUSA/Golf/Thompson_Lexi/thompson_lexi_07152017_800x375.jpg',
        scores: ['1', '2', '4', '3', '4', '3', '1', '2', '4', '4'  ]
    }

    

];

/**
 * A module that exports friendsArray
 * @module friends
 * @exports friendsArray
 */
module.exports = friendsArray;



