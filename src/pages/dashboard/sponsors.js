import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Sponsor from '../../components/sponsor';
import { PrimaryColor } from '../../styles';

const data = [{
  "id": 3,
  "logo": "iVBORw0KGgoAAAANSUhEUgAAAJYAAAAyCAYAAAC+jCIaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABO5JREFUeNrsWu1x4zYQlTP5H6WCMBWEqSC8DugKjldB5AqOqYDpgNcBnQroVEB2QKcCKRUwxM1C87wBYBGEdOe592Y4likQCyzeflK7HUEQBEEQBEEQBEEQBEEQBEEQBPGtYZ7n\/XIV1MS3je+uMGe\/XCQWiZXUW5XLn3y5fqBqSayUyOVvSdWSWNdAtnivmuolUiXt5fwSOTVDbCFVb4glnycg1tHeJ4i1pKqERJn8f1Beq6eWvoozOr61RXdCoAruDYpc9RXlZ6K4Wq6SIfismwNGkLcYBg0muJcrYh2tR0uc07XoGR2EruipPhvbmyQWHu5BWQuiuRKha3W\/ECLPrEzPOnmTxCp8lSCEyaS5FuR1\/Strqr+APnISK93CB1fYk3CVPMaDl2wCY6ZbE0sI35NYkRYpcbsHAmmvNUD7oYL7rbz2SRUGve0MkVvcUC+ZrIfEirDGyVftGe+hvutA4bMjmW9jE3olq\/0KdLMHr01ircihptmPItBmqHBjHtSRa5pVRVhc+GwN6xxc8sUYWhlrP09gEHvlwXVTuIerVMb5QrbL40rhc3SstwvlcDJ\/J+PtOg4+YolB1Gr9ThkQpfaQOw9bk+QQJgh7GVRk5wO\/YI5hbYfes7bB12IAr3KUZ0tYawPr75SSj3BIs1YolPQ96KOGK4NCBmX\/z8PJ+KPaj9Xj0de6UYfdyfyFjiIO47HGcpDxB5BTOCLVoJ1HimovhE4pB623WzvHynyv9xAsd1icbuS+qC6h2drB+mswnBwUX3nm7z0e6EWxgfqFe6XSX6sKocEV\/oFAdcgAPQWX1lOJfUnwgKjbwq4nhljTvA6HDc9uemktG+1DTVkPsQoXGWBsHcjv6hXEqjyEcB14EQhdpcPLZbpB\/VqOBevpXjn7Usm9uNEd+tnM2sT6Iwh9jEzpoirGu7u7p+V6t3w01yi3jZfBg\/xzuX5exn2yHmAX90vXfyOeeRTZH5AkEfOcAjp7WjHPb\/ZZl3XD2edK7rjs4fkSAd8nzPPNQRkL+DVS+ZthCGbki0UXSJzlO6Ock+QO73c3\/DEiyDYH9vtyVYn1bvDPimfODmBZ2\/019hzyWM8R8+USan6KXM9FVie5Tsij\/uFJ3g3helHsvVy3akcY7zmJF3hYDvTHxGJ+iXgmu9aeQ8R6iJzzfaRFPonHuQSNWP6akGG92L0JmytkpUAjOnkQ2Z8Szm0dQLGisv4bHEF2U2Itmzd5wYeIOWPyljHCe1QBRdrcwOZTOdx7CoSTLTjBYen5KthnajzCHhqXd3c8g8T++KUapKXqraRGE9HD6n39L1gvvlbaq95U4XiTUENDt\/F19X3fqTcMtvnZQa8IS\/VSVbGtrTLVz7v3oVaAp8Uz2NdZjr5YC62VytXWADmto4ocUpPL1aHdii2vdHpH571TDcW9hxDYjmj0e0zH3IPkdK6e2eBoK+gGZ+Zp5jYwtpVxjXp+ArL3ju\/ywP5maMiinqrAeif9qsynj1cLlhgPJuVqAeHl0lzAhIK\/pBo5bSR7Lu4\/h1B2klxt9PW7MPyaNcg8J1NGCxlzT6jeub5z5WogZ7T7hPV+1oXIO8t2jNmpsa4UY0Q9iqGWMsez1bOcmbNVIHsuIZEfcewlcpMQK6BEl1JGOexxK5EIgiAIgiAIgiAIgiAIgiAIgiAIgkiK\/wQYAF6HpZlbxo22AAAAAElFTkSuQmCC",
  "nombre": "Santander",
  "paginainternet": "https:\/\/www.santander.com.mx\/mx\/home\/?dclid=CPrAtKHZhdwCFQN1AQod0yEHvQ",
  "twitter": "https:\/\/twitter.com\/santandermx?lang=es",
  "facebook": "https:\/\/es-la.facebook.com\/SantanderMex\/",
  "google": ""
},
{
  "id": 4,
  "logo": "iVBORw0KGgoAAAANSUhEUgAAAJYAAAAyCAYAAAC+jCIaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABB1JREFUeNrsmY9x2jAUxiHXAegGHsEbREwQMgHJBE0mwJnAzQTQCWgmsDsBzgSwQbyBKuU+cY9XSTZpcpf2vt+dDiM\/5KdnvT8SkwkhhBBCCCGEEEIIIYQQQgghhBBCCCGEEELI\/4a11tAK5CMWlqUV0lzQBOQj+JLxyMJ9FPjaTafTfkRKODi5w9A9Nbbk+BwnU7qPWUSmdzLdgMxRFq1I3H\/VyY3jxyhzhnJyLZfL34X4mWu1a2vX7lyrXNu6dpNKCYJGLip1rxL3tjbOQsg0Ns0OeuZkLO5XAzKLiK5\/cE4qhG6veqr+0rW90q8UdmwScjv0peZiUveULQv1bqrg6MqWDZxtEps\/1oYNuo9NhbVrz85Db30Ece2nu752n5fyxScwIkqtMnKpca4S\/Q+uffURBt\/9hPRC97rOVbtXMq2by9TPSfR9izxvHmnnEOZXKuM3iJ4b6JB6MVslFyKun38r7NDhe6\/s0IomWWeeZ8RvTEZWzm85KhWGFe2Vg7c9YUEd8JK26qXEWGGBm4Q3LyKLJizCc3Zas0iKbEc8b5B3SHtLdd0JnTs4bY4iIefH2SDSeJvdB13FPO8z+nvHvxP6TISj+ufNQ0ZJlRjIXOHeTcR5oxHLYDH51fpD9P9CJOtGGNVANsWlMpRcqEUivPqXs1e1kjZeiRAuWx2R2QuP62OGiYzTnFFKFLBBh8iyUDVfidSWLC8icndnLOpa6B2z5SpRc\/bCsa7DIstkle9+gaUc9yIzsSukiRIvth8xqV54wJg0+IRC\/DAiTcoQf\/2Ji+mg\/2NIY8L4c5HafN86sWi0XC1r1AFKLGwTiToP6KvfWn9Dnw7zy5Uvp97mCzPxvQo1UyiWB4r3ShWA+l4RKcK93IvsixTvVULfJrZxUDKVllGbh0YX739zjiWK7h2alTZVhbzUySbsW0Y2RmFOJtcXsdNMbQqq2LPDpk0X7+i3GEPafpatsbD17n2IdtcbFI+9KOofB+zdItUZeIcZKNpjka2MKfrOPGciY\/RUfUyEROopEIF7EcX9zvMBNWqLcmMpCnIdFRpEhSdho37k3JZSf6d3Ja79u73F+DrTGOHAKzy\/StSOB\/EZoupmjDfWYqtewfMWI44bDFqTiGYyUqwz49x8cMSqchHrrccNsJuVtZPoq1VkDp5\/ctyAqL5Xci+yXhqIWMnjhohOISotlG4vSi8rss0uF02Pi3ggn5ZD3qq8u4NXFIh+JwekyO+zxGGqPOzMyiZ+czw4zRz0vsroPjzvrANSb00cXcT0kQe9wY4HbRM5Jvrl4a\/JPLsQO8c+d+jsfxv0EjvIE530+1bjGlHjlqlDcB4gv99BMv8rzMD\/CgkX1ieDoZ8QQgghhBBCCCGEEEIIIYQQQgghhBBCCCH\/Jr8FGABdOg5mhPNMoQAAAABJRU5ErkJggg==",
  "nombre": "Mapfre Asistencia",
  "paginainternet": "https:\/\/www.mapfre-asistencia.com\/asistencia\/es\/",
  "twitter": "https:\/\/twitter.com\/MAPFRE_MX?lang=es",
  "facebook": "https:\/\/es-la.facebook.com\/MAPFREcr\/",
  "google": ""
},
{
  "id": 5,
  "logo": "iVBORw0KGgoAAAANSUhEUgAAAJYAAAAyCAYAAAC+jCIaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABPhJREFUeNrsXIF1mzAQhbwOwAZlBDYwncBsEDpByARxJnAygZ0JyAaQCXAnMJ3AdAIqtV\/ORRFCOImfgfvv3VNsycKxvu+fzic8j8FgMBgMBoPx2fD5I3iLtm1j0YSw72htaIT9wt+lsNr3\/ZqJNW8SBaJJhC2ERbDPQAOSvchWEG3HX9kZkElYKqxqz4e9sLWwaC6fsz8jQklJuxOWfmCaEq30QH86xij5DDo8oJzjSXixLX\/NR04oYZuBHuYgLBe2kjEXJPMj108wV6F5sYRXaJykykCSi5IrEG1DCBxM7bP3J0oouVC5sNhh+DOk6fmEa1hJKOYsHeaR0rw85T0wzkuqyDEw3yDuckpBQMryE4P+AtfLujzinAL7se74+qSvQq6q15OASAfeJc5cCiVpeuTpQcjNbY+8ZcJusKsbgh3yVwov3vsEa2SYtxZ2z7vEyyXVqsdLpD2ebjXAOxUYn7jKqUFaU8jjnnixlFfy8lIKNsQ9i7x3IFMOMgRf9P4zvI\/iFLIyvoZY6xM9VeaQz1qdMx0Aom84mL+Q2Kpr52d5TV\/SdDXF\/BJjGLG6vE1g2fHZdo2RJRbLYDF\/8vOMr9YnxGMbC6HWQ3JfjGnkrkyIBkpgF6kiBNXsoVgK23YgCYuO8QkkNXJIVVSGlASnDyYWvNuI4hSLQTIPtgoEeDOXTD9vAkZKLD1tUHWMMyVRVxbJrHpiO+eEKq\/SeOOsg4MUmogVdoyVcVX2gXSFU8w3VVxN4Z\/wfV\/+Rnevy5RhaK093lkOPkjC2WrVh+4OEybWOMn1IJoteerGMKzUHjeWKSWpPtPL1Kwt45bEigTloWFM4RL7qFJiS386sNQ55BUaP7ly9cOxoT+mC94zz77nB+zCkVicdpgQwVSgnhn61o6VDyo5Gjlcp6ugjw9MTJBcqkw5tezqip45QnimviRpCpIpi3kFpk+w1EQMQq7EcQ6WNIYz6bK+n20YjFPJFSLg550bg8FgzA6zu40R0g+y2qBWR67ID9GlOr2MXZ200nt\/orpEG2vzyOA+RH\/tvb8BSUOvjU2Diu3kKWhZnHjLtz0aZyz1LjmqZcgjRTZS+26qh8\/J40Cr9cq1ROwxUar9fSDzFVwJMV5irU0ZcVP9VAexMhAm1GrAUq10p9CIFau8lkbIY4kPcm58OmekxKKHQ4\/eoeO+DiZiVSpZaiCjfjYx1oimrkVLfDjNMQFSJWQx6aKHmkdqNfKZpDAjcx0Mr2lN1arEMzkdph0zrmbErSVaGTzTOIYG2DJoVvd2MOW0fojA2vdeS2Dk+EfS\/+i91nAdPZEPoER5QwJ5iZxLl8frrQKDnFUGL6PioI0WqHdhTTzeAdcpSABvkthjGQ25ds6rNNIUgyJRxw5RJxat67IRa0UC8o22QbCV1CSaPLdTq4KY081tU8hUCJmqIUcRyS8p1OS5hsjaFtL5gL4UY2sinaryNCTPN8hTpWSOHeb4N35qtzH6NhcpRGyzJaRaEPI8CbsmpJD9MSHiT+9\/8lLijpBJvqbEmAX6bwgZt1oMp\/quyXjZJt7bsmoO3keCGERIQAQlOy\/Eu8gF\/60F8irYj9EuMY\/aCJSYY6F5LM\/g\/ZaE0DUJ3uXcDUvhOD1WSEiiSKS8VUC8TkNaKmOxthNUMhfIUz6Q2Vp7XeC9PawRaB4xJP0Ndo81R8QMBoNxbvwVYAAAV2hPfZ346gAAAABJRU5ErkJggg==",
  "nombre": "ANEMEX",
  "paginainternet": "https:\/\/www.anemex.mx\/es\/home\/page",
  "twitter": "",
  "facebook": "",
  "google": ""
}];

type Props = {};
export default class Sponsors extends Component<Props> {

  _keyExtractor = (item) => `${item.id}`;

  render(){
    return (
      <FlatList
        style={styles.flatlist}
        data={data}
        keyExtractor={this._keyExtractor}
        renderItem={({ item }) => <Sponsor {...item} key={item.id}/>}/>
    );
  }
}

const styles =  StyleSheet.create({
  flatlist: {
    backgroundColor: PrimaryColor,
  },
});
