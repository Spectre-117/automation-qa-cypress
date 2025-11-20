describe('Main page', () => {

    const expectedHeaderNavButtonsLeft = [
        "Home",
        "About",
        "Contacts"
    ]

    const expectedHeaderNavButtonsRight = [
        "Guest log in",
        "Sign In"
    ]

    const expectedFooterLinksLeft = [
        "https://www.facebook.com/Hillel.IT.School",
        "https://t.me/ithillel_kyiv",
        "https://www.youtube.com/user/HillelITSchool?sub_confirmation=1",
        "https://www.instagram.com/hillel_itschool/",
        "https://www.linkedin.com/school/ithillel/"
    ]
    const expectedFooterLinksRight = [
        "https://ithillel.ua",
        "mailto:developer@ithillel.ua"
    ]


    beforeEach(() => {
        cy.visit('/');
    })

    it('Nav elements in header should be valid', () => {

        cy.get('.header_left').within(() => {
            cy.get('.header_nav').children().then(($buttons) => {
                const buttonTexts = []
                $buttons.each((index, $button) => {
                    buttonTexts.push($button.textContent.trim());
                });
                cy.log(buttonTexts)
                expect(buttonTexts, "Buttons on the left header should be valid").to.deep.eq(expectedHeaderNavButtonsLeft)
            })
        })

        cy.get('.header_right').children().then(($buttons) => {
            const buttonTexts = []
            $buttons.each((index, $button) => {
                buttonTexts.push($button.textContent.trim());
            });
            cy.log(buttonTexts)
            expect(buttonTexts, "Buttons on the right should be valid").to.deep.eq(expectedHeaderNavButtonsRight)

        })

    })

    it('Nav elements in footer should be valid', () => {

        cy.get(".contacts_socials").find('a').then(($links) => {
            const foundLinksLeftFooter = [];
            cy.wrap($links).each(($link) => {
                const href = $link.attr('href');
                foundLinksLeftFooter.push(href);

            }).then(() => {
                for (const link of foundLinksLeftFooter) {
                    cy.log(link);
                    //cy.get(`a[href="${link}"]`).click();
                }
                expect(foundLinksLeftFooter, "Links on the left footer should be valid").to.deep.eq(expectedFooterLinksLeft)
            })

        })

        cy.get(".col-md-6").last().find('a').then(($links) => {
            const foundLinksRightFooter = [];
            cy.wrap($links).each(($link) => {
                const href = $link.attr('href');
                foundLinksRightFooter.push(href);
            }).then(() => {
                for (const link of foundLinksRightFooter) {
                    cy.log(link);
                }
                expect(foundLinksRightFooter, "Links on the right footer should be valid").to.deep.eq(expectedFooterLinksRight)
            })

        })
    })
})
