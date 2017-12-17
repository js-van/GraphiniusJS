/// <reference path="../../typings/tsd.d.ts" />

import * as chai from 'chai';
import * as $N from '../../src/core/Nodes';
import * as $E from '../../src/core/Edges';
import * as $G from '../../src/core/Graph';
import * as $KRON from '../../src/generators/kroneckerLeskovec';

var expect = chai.expect;

    describe("Base Tests", () => {
        it('should generate a standard config', () => {
            var gen = new $KRON.KROL();
            var cfg = gen.prepareKROLStandardConfig();
            expect( cfg ).to.deep.equal(
                {
                    genMat: [[0.9, 0.5], [0.5, 0.1]],
                    cycles: 5
                });
        });

        it('should generate a graph from standard config', () => {
            var gen = new $KRON.KROL();
            var synGraph = gen.generate().graph;
            expect(synGraph.nrNodes() ).to.equal(32);
            // TODO: what can we test besides the number of nodes?
        });

        it('should generate a graph with 256 nodes', () => {
            var cfg = {
                genMat: [[0.9, 0.5], [0.5, 0.1]],
                cycles: 8
            };
            var gen = new $KRON.KROL(cfg);
            var synGraph = gen.generate().graph;
            expect(synGraph.nrNodes() ).to.equal(256);
        });
    });