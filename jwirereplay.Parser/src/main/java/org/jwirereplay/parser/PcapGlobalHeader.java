package org.jwirereplay.parser;

import org.jwirereplay.parser.util.HeaderParseUtil;

public class PcapGlobalHeader {
	private long magicNumber;
	private int majorVersion;
	private int minorVersion;
	private long thisZone;
	private long sigfigs;
	private long snaplen;
	private long network;
	
	public PcapGlobalHeader(byte[] globalHeaderArray) {
		magicNumber = HeaderParseUtil.convertPcapHeaderInt(globalHeaderArray, 0);
		majorVersion = HeaderParseUtil.convertPcapHeaderShort(globalHeaderArray, 4);
		minorVersion = HeaderParseUtil.convertPcapHeaderShort(globalHeaderArray, 6);
		thisZone = HeaderParseUtil.convertPcapHeaderInt(globalHeaderArray, 8);
		sigfigs = HeaderParseUtil.convertPcapHeaderInt(globalHeaderArray, 12);
		snaplen = HeaderParseUtil.convertPcapHeaderInt(globalHeaderArray, 16);
		network = HeaderParseUtil.convertPcapHeaderInt(globalHeaderArray, 20);
	}

	public long getMagicNumber() {
		return magicNumber;
	}

	public void setMagicNumber(long magicNumber) {
		this.magicNumber = magicNumber;
	}

	public int getMajorVersion() {
		return majorVersion;
	}

	public void setMajorVersion(int majorVersion) {
		this.majorVersion = majorVersion;
	}

	public int getMinorVersion() {
		return minorVersion;
	}

	public void setMinorVersion(int minorVersion) {
		this.minorVersion = minorVersion;
	}

	public long getThisZone() {
		return thisZone;
	}

	public void setThisZone(long thisZone) {
		this.thisZone = thisZone;
	}

	public long getSigfigs() {
		return sigfigs;
	}

	public void setSigfigs(long sigfigs) {
		this.sigfigs = sigfigs;
	}

	public long getSnaplen() {
		return snaplen;
	}

	public void setSnaplen(long snaplen) {
		this.snaplen = snaplen;
	}

	public long getNetwork() {
		return network;
	}

	public void setNetwork(long network) {
		this.network = network;
	}
	
	
}
