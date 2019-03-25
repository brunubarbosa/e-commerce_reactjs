const phoneData = [
    {
        marca: 'samsung',
        modelos: [
            { 
               id: 1,
                nome: 'Samsung galaxy s10',
                preço: '5.654,00',
                descricao: 'O Samsung Galaxy S10 Preto é o Smartphone da próxima geração e foi projetado para não só se destacar, mas para se diferenciar. Ele possui leitor de digital ultrassônico que o desbloqueia o seu celular com um toque. Conta também com processador Octa-Core, 128GB de armazenamento interno, 8GB de RAM, tecnologia 3G/4G e é Dual Chip. Além de tudo, tem tela infinita de 6,1", câmera Tripla Traseira de 12MP OIS (F1.5/F2.4) + Ultra Wide 16MP (F2.2) + 12MP OIS (F2.4) e câmera selfie de 10MP Auto Focus',
                images: ['https://images-americanas.b2w.io/produtos/01/00/oferta/134218/1/134218179_2GG.jpg',
                        'https://images-americanas.b2w.io/produtos/01/00/oferta/134218/1/134218179_5GG.jpg',
                        'https://images-americanas.b2w.io/produtos/01/00/oferta/134218/1/134218179_1GG.jpg'] 
            },
            {
               id: 2,
                nome: 'Samsung galaxy s9',
                preço: '4.624,90',
                descricao: 'O Samsung Galaxy S10 Preto é o Smartphone da próxima geração e foi projetado para não só se destacar, mas para se diferenciar. Ele possui leitor de digital ultrassônico que o desbloqueia o seu celular com um toque. Conta também com processador Octa-Core, 128GB de armazenamento interno, 8GB de RAM, tecnologia 3G/4G e é Dual Chip. Além de tudo, tem tela infinita de 6,1", câmera Tripla Traseira de 12MP OIS (F1.5/F2.4) + Ultra Wide 16MP (F2.2) + 12MP OIS (F2.4) e câmera selfie de 10MP Auto Focus',
                images: ['https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133274/7/133274700_1GG.png',
                        'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133274/7/133274700_2GG.jpg',
                        'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133274/7/133274700_6GG.jpg']
            },
            {
               id: 3,
                nome: 'Samsung galaxy s8',
                preço: '2.427,00',
                descricao: 'O Samsung Galaxy S10 Preto é o Smartphone da próxima geração e foi projetado para não só se destacar, mas para se diferenciar. Ele possui leitor de digital ultrassônico que o desbloqueia o seu celular com um toque. Conta também com processador Octa-Core, 128GB de armazenamento interno, 8GB de RAM, tecnologia 3G/4G e é Dual Chip. Além de tudo, tem tela infinita de 6,1", câmera Tripla Traseira de 12MP OIS (F1.5/F2.4) + Ultra Wide 16MP (F2.2) + 12MP OIS (F2.4) e câmera selfie de 10MP Auto Focus',
                images: ['https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/132118/3/132118393_1GG.png',
                        'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/132118/3/132118393_2GG.jpg',
                        'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/132118/3/132118393_5GG.jpg']
            },
            {
               id: 4,
                nome: 'Samsung j8',
                preço: '2.129,00',
                descricao: 'O Samsung Galaxy S10 Preto é o Smartphone da próxima geração e foi projetado para não só se destacar, mas para se diferenciar. Ele possui leitor de digital ultrassônico que o desbloqueia o seu celular com um toque. Conta também com processador Octa-Core, 128GB de armazenamento interno, 8GB de RAM, tecnologia 3G/4G e é Dual Chip. Além de tudo, tem tela infinita de 6,1", câmera Tripla Traseira de 12MP OIS (F1.5/F2.4) + Ultra Wide 16MP (F2.2) + 12MP OIS (F2.4) e câmera selfie de 10MP Auto Focus',
                images: ['https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133731/1/133731122_1GG.png',
                        'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133731/1/133731122_2GG.jpg',
                        'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133731/1/133731122_5GG.jpg']
            },
            {
               id: 5,
                nome: 'Samsung j6',
                preço: '1.082,10',
                descricao: 'O Samsung Galaxy S10 Preto é o Smartphone da próxima geração e foi projetado para não só se destacar, mas para se diferenciar. Ele possui leitor de digital ultrassônico que o desbloqueia o seu celular com um toque. Conta também com processador Octa-Core, 128GB de armazenamento interno, 8GB de RAM, tecnologia 3G/4G e é Dual Chip. Além de tudo, tem tela infinita de 6,1", câmera Tripla Traseira de 12MP OIS (F1.5/F2.4) + Ultra Wide 16MP (F2.2) + 12MP OIS (F2.4) e câmera selfie de 10MP Auto Focus',
                images: ['https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133621/7/133621708_1GG.png',
                        'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133621/7/133621708_3GG.jpg',
                        'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133621/7/133621708_6GG.jpg'] 
            }
        ],

    },
    {
        marca: 'motorola',
        modelos: [
            { 
               id: 1,
                nome: 'Motorola moto g6',
                preço: '2.172,00',
                descricao: 'O Samsung Galaxy S10 Preto é o Smartphone da próxima geração e foi projetado para não só se destacar, mas para se diferenciar. Ele possui leitor de digital ultrassônico que o desbloqueia o seu celular com um toque. Conta também com processador Octa-Core, 128GB de armazenamento interno, 8GB de RAM, tecnologia 3G/4G e é Dual Chip. Além de tudo, tem tela infinita de 6,1", câmera Tripla Traseira de 12MP OIS (F1.5/F2.4) + Ultra Wide 16MP (F2.2) + 12MP OIS (F2.4) e câmera selfie de 10MP Auto Focus',
                images: ['https://images-americanas.b2w.io/produtos/01/00/item/133453/1/133453126_1GG.png',
                        'https://images-americanas.b2w.io/produtos/01/00/item/133453/1/133453126_2GG.jpg',
                        'https://images-americanas.b2w.io/produtos/01/00/item/133453/1/133453126_6GG.jpg',
                        'https://images-americanas.b2w.io/produtos/01/00/item/133453/1/133453126_4GG.jpg']
            },
            {
               id: 2,
                nome: 'Motorola moto g7',
                preço: '2.938,00',
                descricao: 'O Samsung Galaxy S10 Preto é o Smartphone da próxima geração e foi projetado para não só se destacar, mas para se diferenciar. Ele possui leitor de digital ultrassônico que o desbloqueia o seu celular com um toque. Conta também com processador Octa-Core, 128GB de armazenamento interno, 8GB de RAM, tecnologia 3G/4G e é Dual Chip. Além de tudo, tem tela infinita de 6,1", câmera Tripla Traseira de 12MP OIS (F1.5/F2.4) + Ultra Wide 16MP (F2.2) + 12MP OIS (F2.4) e câmera selfie de 10MP Auto Focus',
                images: ['https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/134186/8/134186808_1GG.jpg',
                        'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/134186/8/134186808_2GG.jpg',
                        'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/134186/8/134186808_3GG.jpg']
            },
            {
               id: 3,
                nome: 'Motorola e5',
                preço: '4.272,00',
                descricao: 'O Samsung Galaxy S10 Preto é o Smartphone da próxima geração e foi projetado para não só se destacar, mas para se diferenciar. Ele possui leitor de digital ultrassônico que o desbloqueia o seu celular com um toque. Conta também com processador Octa-Core, 128GB de armazenamento interno, 8GB de RAM, tecnologia 3G/4G e é Dual Chip. Além de tudo, tem tela infinita de 6,1", câmera Tripla Traseira de 12MP OIS (F1.5/F2.4) + Ultra Wide 16MP (F2.2) + 12MP OIS (F2.4) e câmera selfie de 10MP Auto Focus',
                images: ['https://images-americanas.b2w.io/produtos/01/00/item/133541/4/133541468_1GG.jpg',
                        'https://images-americanas.b2w.io/produtos/01/00/item/133541/4/133541468_2GG.jpg',
                        'https://images-americanas.b2w.io/produtos/01/00/item/133541/4/133541468_3GG.jpg']
            }
        ]
    },
            {
                marca: 'asus',
                modelos: [
                    { 
                       id: 1,
                        nome: 'ZenFone Max Pro (M1)',
                        preço: '1.132,10',
                        descricao: 'O ZenFone Max Pro (M1) da Asus traz o melhor dos 2 mundos, pois além do desempenho, tem bateria de 5000mAh, e ainda, o sistema de câmera dupla, uma com 13MP e outra com 5MP que criam retratos perfeitos com o efeito bokeh, aquele desfoque que dá um toque profissional às fotos, além da câmera Selfie com 8MP. Tudo isso com a experiência da interface pura do sistema operacional Android 8.1 Oreo. Na parte frontal temos uma tela de 6", mais ampla, com proporção 18:9 e resolução Full HD+ 2160x1080 (maior que Full HD)',
                        images: ['https://a-static.mlcdn.com.br/618x463/smartphone-asus-zenfone-max-pro-m1-32gb-preto-4g-3gb-ram-tela-6-cam-13mp-5mp-selfie-8mp/magazineluiza/220985500/471f67ad8b71c5b0988b95e3d9f4dca7.jpg',
                                'https://a-static.mlcdn.com.br/618x463/smartphone-asus-zenfone-max-pro-m1-32gb-preto-4g-3gb-ram-tela-6-cam-13mp-5mp-selfie-8mp/magazineluiza/220985500/ed5ba34fc8aa1a4ab807ce54d8702488.jpg',
                                ]
                    },
                    {
                       id: 2,
                        nome: ' Asus Zenfone 5 ZE620KL',
                        preço: '1.987,00',
                        descricao: 'O Samsung Galaxy S10 Preto é o Smartphone da próxima geração e foi projetado para não só se destacar, mas para se diferenciar. Ele possui leitor de digital ultrassônico que o desbloqueia o seu celular com um toque. Conta também com processador Octa-Core, 128GB de armazenamento interno, 8GB de RAM, tecnologia 3G/4G e é Dual Chip. Além de tudo, tem tela infinita de 6,1", câmera Tripla Traseira de 12MP OIS (F1.5/F2.4) + Ultra Wide 16MP (F2.2) + 12MP OIS (F2.4) e câmera selfie de 10MP Auto Focus',
                        images: ['https://a-static.mlcdn.com.br/618x463/smartphone-asus-zenfone-5-ze620kl-64gb-desbloqueado/cissamagazine/116332/c1be474b472f79d36fbe0d11d686b091.jpg',
                                'https://a-static.mlcdn.com.br/618x463/smartphone-asus-zenfone-5-ze620kl-64gb-desbloqueado/cissamagazine/116332/41e9df10982946c8a9d684e49925f0ec.jpg',
                                'https://a-static.mlcdn.com.br/618x463/smartphone-asus-zenfone-5-ze620kl-64gb-desbloqueado/cissamagazine/116332/23733f3a06f00298e36297d33c0e24ff.jpg']
                    },
                    {
                       id: 3,
                        nome: 'Zenfone Max Pro',
                        preço: '4.272,00',
                        descricao: 'O ZenFone Max Pro (M1) traz o melhor dos dois mundos, pois além do desempenho, ele tem bateria de 5.000mAh. E ainda, o sistema de câmera dupla cria retratos perfeito com o efeito bokeh, aquele desfoque que dá um toque profissional às fotos. Tudo isso com a experiência da interface pura do sistema Android.Energia de sobra! Dentro do ZenFone Max Pro (M1) tem uma bateria gigantesca, com 5.000mAh, que ocupa pouquíssimo espaço, para você aproveitar seu smartphone por até 2 dias*, mas mantendo o design fino e leve. Com tanta energia, você pode navegar mais, jogar mais, ver mais vídeos e falar muito mais, sem se preocupar com tomadas.',
                        images: ['https://www.extra-imagens.com.br/TelefoneseCelulares/Smartphones/Android/13439764/1003323662/smartphone-asus-zenfone-max-pro-prata-32gb-tela-6-0-3gb-ram-camera-traseira-dupla-bateria-5000mah-processador-octa-core-android-8-0-e-dual-chip-13439764.jpg',
                                'https://www.extra-imagens.com.br/TelefoneseCelulares/Smartphones/Android/13439764/1003323582/smartphone-asus-zenfone-max-pro-prata-32gb-tela-6-0-3gb-ram-camera-traseira-dupla-bateria-5000mah-processador-octa-core-android-8-0-e-dual-chip-13439764.jpg',
                                'https://www.extra-imagens.com.br/TelefoneseCelulares/Smartphones/Android/13439764/1003323790/smartphone-asus-zenfone-max-pro-prata-32gb-tela-6-0-3gb-ram-camera-traseira-dupla-bateria-5000mah-processador-octa-core-android-8-0-e-dual-chip-13439764.jpg']
                    },
                    {
                       id: 4,
                        nome: 'Asus Max M1',
                        preço: '872,00',
                        descricao: 'O ZenFone Max Pro (M1) traz o melhor dos dois mundos, pois além do desempenho, ele tem bateria de 5.000mAh. E ainda, o sistema de câmera dupla cria retratos perfeito com o efeito bokeh, aquele desfoque que dá um toque profissional às fotos. Tudo isso com a experiência da interface pura do sistema Android.Energia de sobra! Dentro do ZenFone Max Pro (M1) tem uma bateria gigantesca, com 5.000mAh, que ocupa pouquíssimo espaço, para você aproveitar seu smartphone por até 2 dias*, mas mantendo o design fino e leve. Com tanta energia, você pode navegar mais, jogar mais, ver mais vídeos e falar muito mais, sem se preocupar com tomadas.',
                        images: ['https://a-static.mlcdn.com.br/618x463/smartphone-asus-max-m1-preto-zc520kl-tela-de-52-32gb-13mp/onofre-agora/786063/a35514560aa2cfa14ef1a3da10bc3a40.jpg']
                    }
            
            
            ],

        },
        {
            marca: 'apple',
            modelos: [
                { 
                   id: 1,
                    nome: 'iPhone 7 Plus',
                    preço: '2.832,10',
                    descricao: 'O iPhone 7 Plus da Asus traz o melhor dos 2 mundos, pois além do desempenho, tem bateria de 5000mAh, e ainda, o sistema de câmera dupla, uma com 13MP e outra com 5MP que criam retratos perfeitos com o efeito bokeh, aquele desfoque que dá um toque profissional às fotos, além da câmera Selfie com 8MP. Tudo isso com a experiência da interface pura do sistema operacional Android 8.1 Oreo. Na parte frontal temos uma tela de 6", mais ampla, com proporção 18:9 e resolução Full HD+ 2160x1080 (maior que Full HD)',
                    images: ['https://www.extra-imagens.com.br/TelefoneseCelulares/Smartphones/iPhone/10477682/622909101/iphone-7-plus-apple-ios-11-dupla-camera-traseira-resistente-a-agua-wi-fi-4g-lte-e-nfc-32gb-ouro-rosa-tela-hd-de-55-10477682.jpg',
                            'https://www.extra-imagens.com.br/TelefoneseCelulares/Smartphones/iPhone/10477682/622909123/iphone-7-plus-apple-ios-11-dupla-camera-traseira-resistente-a-agua-wi-fi-4g-lte-e-nfc-32gb-ouro-rosa-tela-hd-de-55-10477682.jpg',
                            'https://www.extra-imagens.com.br/TelefoneseCelulares/Smartphones/iPhone/10477682/623944514/iphone-7-plus-apple-ios-11-dupla-camera-traseira-resistente-a-agua-wi-fi-4g-lte-e-nfc-32gb-ouro-rosa-tela-hd-de-55-10477682.jpg'
                            ]
                },
                {
                   id: 2,
                    nome: ' iPhone 6s',
                    preço: '2.800,00',
                    descricao: 'O iPhone 6s Preto é o Smartphone da próxima geração e foi projetado para não só se destacar, mas para se diferenciar. Ele possui leitor de digital ultrassônico que o desbloqueia o seu celular com um toque. Conta também com processador Octa-Core, 128GB de armazenamento interno, 8GB de RAM, tecnologia 3G/4G e é Dual Chip. Além de tudo, tem tela infinita de 6,1", câmera Tripla Traseira de 12MP OIS (F1.5/F2.4) + Ultra Wide 16MP (F2.2) + 12MP OIS (F2.4) e câmera selfie de 10MP Auto Focus',
                    images: ['https://www.extra-imagens.com.br/TelefoneseCelulares/Smartphones/iPhone/11448066/1083086646/iphone-6s-apple-com-tela-47-hd-com-64gb-3d-touch-ios-9-sensor-touch-id-camera-isight-12mp-wi-fi-4g-gps-bluetooth-e-nfc-ouro-rosa-11448066.jpg']
                },
                {
                   id: 3,
                    nome: 'iPhone 8',
                    preço: '3.262,00',
                    descricao: 'O ZenFone Max Pro (M1) traz o melhor dos dois mundos, pois além do desempenho, ele tem bateria de 5.000mAh. E ainda, o sistema de câmera dupla cria retratos perfeito com o efeito bokeh, aquele desfoque que dá um toque profissional às fotos. Tudo isso com a experiência da interface pura do sistema Android.Energia de sobra! Dentro do ZenFone Max Pro (M1) tem uma bateria gigantesca, com 5.000mAh, que ocupa pouquíssimo espaço, para você aproveitar seu smartphone por até 2 dias*, mas mantendo o design fino e leve. Com tanta energia, você pode navegar mais, jogar mais, ver mais vídeos e falar muito mais, sem se preocupar com tomadas.',
                    images: ['https://www.extra-imagens.com.br/TelefoneseCelulares/Smartphones/iPhone/13375319/990411586/iphone-8-apple-com-ios-11-camera-de-12-mp-resistente-a-agua-wi-fi-4g-lte-e-nfc-64gb-dourado-tela-hd-de-47-13375319.jpg',
                            'https://www.extra-imagens.com.br/TelefoneseCelulares/Smartphones/iPhone/13375319/990411603/iphone-8-apple-com-ios-11-camera-de-12-mp-resistente-a-agua-wi-fi-4g-lte-e-nfc-64gb-dourado-tela-hd-de-47-13375319.jpg'
                        ]
                }
        
        
        ],

    }

]


// for marca of marcas
// data.find(marca => marca === busca);


let busca = 'samsung'

// phoneData[busca].modelo.preco

export default phoneData;