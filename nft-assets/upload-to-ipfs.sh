#!/bin/bash
# Arguments:
#  $1 -- API-KEY
#  $2 -- API-Secret
#  $3 -- filename
#
# Example:
#  https://ethglobal-waterloo-rtree.infura-ipfs.io/ipfs/QmbnE5uQ5drB71cTG57JBs4qvx3zxcgWGjSNkQxW8gK1Ft
#  https://ethglobal-waterloo-rtree.infura-ipfs.io/ipfs/QmcifJP8TTMezb1pWZBSGXijdqdWnizAE6x9uiLtZFDuxc
#  https://ethglobal-waterloo-rtree.infura-ipfs.io/ipfs/QmUvptUCdqsMwUXiRAxoUTdGCuwEm1QzCTgyRdfkB8yaWA

curl "https://ipfs.infura.io:5001/api/v0/add" \
-X POST \
-F file=@"$3" \
-u "$1:$2"
