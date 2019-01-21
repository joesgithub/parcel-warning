"use strict";

const debug = require('debug')('parcel-plugin-ssg:ConsolidatePrecompilePackager');
const { Packager } = require('parcel-bundler')

class ConsolidatePrecompilePackager extends Packager {
    static shouldAddAsset(bundle, asset) {
        debug(bundle, asset);

        return true;
    }

  async addAsset(asset) {
    const precompileType = `${asset.engine}-precompile.js`;
    const content = asset.generated[precompileType];

    // required. write the asset to the output file.
    await this.dest.write(content);
  }
}

module.exports = ConsolidatePrecompilePackager