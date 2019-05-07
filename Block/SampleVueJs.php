<?php

namespace Bluebirdday\SampleVueJs\Block;

use Magento\Framework\View\Element\Template;

/**
 * Class SampleVueJs
 * @package Bluebirdday\SampleVueJs\Block
 */
class SampleVueJs extends Template
{
    /**
     * Get JSON config
     * @return false|string
     */
    public function getJsonConfig()
    {
        $config = [
            'baseUrl' => $this->getBaseUrl(),
            'viewFileUrl' => $this->getViewFileUrl('Bluebirdday_SampleVueJs')
        ];
        return json_encode($config);
    }
}
