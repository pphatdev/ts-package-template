
import { defineFeature, loadFeature } from 'jest-cucumber';
import path from 'path';
import TSTemplate from '../types/TSTemplate';
const feature = loadFeature(path.join(__dirname, './testing.feature'));

defineFeature(feature, test => {

    const hello = new TSTemplate()

    /* Hello World */ 
    test('Helloworld', ({ given }) => {
        given(/^"(.*)"$/, (saySomething) => {
            const result = hello.helloTSTemplate(saySomething);
            console.log(result); 
        });
    });

});

